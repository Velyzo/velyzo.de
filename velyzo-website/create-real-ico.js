const fs = require('fs');
const path = require('path');

// Simple Base64 encoded 16x16 favicon.ico with our design
// This is a real ICO file, not SVG
const iconData = `
AAABAAEAEBAAAAAAAABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A
////AP///wD///8Af4P/L3+D/z9/g/8/f4P/P3+D/z9/g/8/f4P/P3+D/z9/g/8/f4P/L////wD///8A////AP///wD///8A
f4P/L8Sn/7/Ep/+/xKf/v8Sn/7/Ep/+/xKf/v8Sn/7/Ep/+/xKf/v8Sn/7/Ep/+/f4P/L////wD///8A////AH+D/z/Ep/+/
3K//392v/9/dr//f3a//392v/9/dr//f3a//392v/9/dr//f3a//39yv/7/Ep/+/f4P/P////wD///8Af4P/P8Sn/7/dr//f
77f/3++3/9/vt//f77f/3++3/9/vt//f77f/3++3/9/vt//f77f/39yv/7/Ep/+/f4P/P////wD///8Af4P/P8Sn/7/dr//f
77f/3+++/9/vvv/f777/3++//9/vvv/f777/3++//9/vvv/f777/39yv/7/Ep/+/f4P/P////wD///8Af4P/P8Sn/7/dr//f
77f/3+++/9/vvv/f//////////////////////////////3++//9/dr//f8Sn/7/Ep/+/f4P/P////wD///8Af4P/P8Sn/7/dr//f
77f/3+++/9////////////f/3///////////////////////////////dr//f8Sn/7/Ep/+/f4P/P////wD///8Af4P/P8Sn/7/dr//f
77f/3+++/9/////////////////////////////////vvv/f777/3++//9/dr//f8Sn/7/Ep/+/f4P/P////wD///8Af4P/P8Sn/7/dr//f
77f/3+++/9/vvv/f777/3++//9/vvv/f777/3++//9/vvv/f777/39yv/7/Ep/+/f4P/P////wD///8Af4P/P8Sn/7/dr//f
77f/3++3/9/vt//f77f/3++3/9/vt//f77f/3++3/9/vt//f77f/39yv/7/Ep/+/f4P/P////wD///8Af4P/P8Sn/7/dr//f
3a//392v/9/dr//f3a//392v/9/dr//f3a//392v/9/dr//f3K//v8Sn/7/f4P/P////wD///8A////AH+D/z/Ep/+/xKf/v8Sn/7/Ep/+/
xKf/v8Sn/7/Ep/+/xKf/v8Sn/7/Ep/+/xKf/v3+D/z////8A////AP///wD///8Af4P/L3+D/z9/g/8/f4P/P3+D/z9/g/8/f4P/P3+D/z9/g/8/f4P/P3+D/z9/g/8v////AP///wD///8A
////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==`;

// Convert base64 to buffer and write as .ico file
const buffer = Buffer.from(iconData.replace(/\s/g, ''), 'base64');
const publicPath = path.join(__dirname, 'public');
fs.writeFileSync(path.join(publicPath, 'favicon.ico'), buffer);

console.log('Real ICO favicon created successfully!');
