const fs = require('fs');
const path = require('path');

console.log('--- Digital Metrya: Building for deployment ---');

// 1. Ensure wedding directory exists with index.html
const weddingDir = path.join(__dirname, 'wedding');
if (!fs.existsSync(weddingDir)) {
  fs.mkdirSync(weddingDir, { recursive: true });
}

const weddingPreviewHtml = path.join(__dirname, 'wedding-preview', 'index.html');
if (fs.existsSync(weddingPreviewHtml)) {
  fs.copyFileSync(weddingPreviewHtml, path.join(weddingDir, 'index.html'));
  console.log('✓ wedding/index.html synchronized');
}

// 2. Ensure root brand directory mirrors public/brand
const brandDir = path.join(__dirname, 'brand');
const publicBrandDir = path.join(__dirname, 'public', 'brand');

if (fs.existsSync(publicBrandDir)) {
  if (!fs.existsSync(brandDir)) {
    fs.mkdirSync(brandDir, { recursive: true });
  }
  const files = fs.readdirSync(publicBrandDir);
  for (const f of files) {
    fs.copyFileSync(path.join(publicBrandDir, f), path.join(brandDir, f));
  }
  console.log('✓ brand assets mirrored to /brand and /public/brand');
}

console.log('✅ Static build complete! Ready for Vercel, Netlify, and local server.');
