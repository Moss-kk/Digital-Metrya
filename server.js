/**
 * Digital Metrya — Local preview server
 * Run: node server.js
 * Open: http://localhost:3000
 */
const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];

  // Route map
  const routes = {
    '/':              '/index.html',
    '/wedding':       '/wedding-preview/index.html',
    '/samples/wedding': '/wedding-preview/index.html',
    '/digitalmetrya': '/wedding-preview/digitalmetrya.html',
  };

  if (routes[urlPath]) urlPath = routes[urlPath];

  let filePath = path.join(ROOT, urlPath);

  // Try directory → index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`<h1>404 — Not found</h1><p><a href="/">← Home</a></p>`);
    return;
  }

  const ext  = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': mime, 'Cache-Control': 'no-store' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║   Digital Metrya — Local Preview Server  ║');
  console.log('╠══════════════════════════════════════════╣');
  console.log(`║   http://localhost:${PORT}                   ║`);
  console.log(`║   http://localhost:${PORT}/wedding            ║`);
  console.log(`║   http://localhost:${PORT}/digitalmetrya      ║`);
  console.log('╚══════════════════════════════════════════╝\n');
});
