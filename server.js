const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const https = require('https');
const fs = require('fs'); // For loading certificate files
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';

// SSL certificates (replace with actual paths)
const privateKey = fs.readFileSync(path.join(__dirname, 'private.key'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, 'certificate.crt'), 'utf8');

// Combine the private key and certificate
const credentials = { key: privateKey, cert: certificate };

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (CSS, images, etc.) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Use Helmet for security headers
const cspDirectives = {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://cdn.jsdelivr.net", "https://cdnjs.cloudflare.com", "'unsafe-inline'"],
    styleSrc: ["'self'", "https://cdn.jsdelivr.net", "https://cdnjs.cloudflare.com", "https://velis.me", "'unsafe-inline'"],
    imgSrc: ["'self'", "https://velis.me", "data:"],
    connectSrc: ["'self'"],
    fontSrc: ["'self'", "https://cdnjs.cloudflare.com"],
    objectSrc: ["'none'"],
    frameSrc: ["'none'"],
    childSrc: ["'none'"],
    formAction: ["'self'"],
    frameAncestors: ["'none'"],
    upgradeInsecureRequests: [],
};

app.use(helmet({
    contentSecurityPolicy: {
        directives: cspDirectives
    }
}));

// Use compression for faster responses
app.use(compression());

// Use morgan for request logging in production (or development)
if (environment === 'production') {
    app.use(morgan('combined'));  // Logs all HTTP requests with detailed info in production
} else {
    app.use(morgan('dev')); // Simpler logging in development
}

// Parse incoming requests with a size limit to prevent large payload attacks
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ limit: '10kb', extended: true }));

// Automatically redirect to language-specific pages based on the browser's language preference
app.get('/', (req, res) => {
    const acceptLanguage = req.headers['accept-language']; // Get the user's preferred languages

    // Define a list of supported languages (you can add or remove languages as needed)
    const supportedLanguages = ['en', 'de', 'es', 'fr', 'ja', 'nl', 'pt'];

    // Get the first language from the Accept-Language header
    const userLang = acceptLanguage.split(',')[0].split('-')[0]; // Example: 'en' from 'en-US'

    // Check if the user's preferred language is supported, otherwise fallback to 'en'
    const languageToRedirect = supportedLanguages.includes(userLang) ? userLang : 'en';

    // Redirect the user to their language-specific page
    res.redirect(`/${languageToRedirect}`);
});

// Routes for each language
app.get('/en', (req, res) => {
    res.render('en/index');
});

// More routes for other languages...

// Handle 404 for undefined routes
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Error handling middleware (catch server errors)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server with HTTPS
https.createServer(credentials, app).listen(443, () => {
    console.log(`Velis website running at https://localhost:443`);
});

// Optional: Redirect HTTP to HTTPS for added security
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80);
