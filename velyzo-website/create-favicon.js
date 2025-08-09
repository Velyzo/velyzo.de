const fs = require('fs');
const path = require('path');

// Create a simple favicon.ico replacement
const faviconContent = `
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="velyzoFav" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="28" height="28" rx="6" ry="6" fill="url(#velyzoFav)" />
  <path d="M 11 11 L 16 21 L 21 11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <path d="M 12.5 13 L 16 19 L 19.5 13" stroke="#ffffff" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.6" />
</svg>
`.trim();

// Write the new favicon
const publicPath = path.join(__dirname, 'public');
fs.writeFileSync(path.join(publicPath, 'favicon-new.svg'), faviconContent);

console.log('New favicon created as favicon-new.svg');
