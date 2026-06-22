import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const docsDir = path.join(rootDir, 'docs');

function copyDirectory(source, destination) {
  fs.mkdirSync(destination, { recursive: true });

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, destinationPath);
      continue;
    }

    fs.copyFileSync(sourcePath, destinationPath);
  }
}

if (!fs.existsSync(distDir)) {
  console.error('Build output not found. Run "npm run build" first.');
  process.exit(1);
}

fs.rmSync(docsDir, { recursive: true, force: true });
copyDirectory(distDir, docsDir);

for (const cnamePath of [
  path.join(docsDir, 'CNAME'),
  path.join(rootDir, 'CNAME'),
  path.join(distDir, 'CNAME'),
]) {
  if (fs.existsSync(cnamePath)) {
    fs.rmSync(cnamePath, { force: true });
  }
}

console.log('Copied build output to docs/ (no custom domain CNAME).');
