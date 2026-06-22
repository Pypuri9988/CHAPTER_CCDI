import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import QRCode from 'qrcode';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

const VERIFY_URL = 'https://pypuri9988.github.io/CHAPTER_CCDI/';

const qrOptions = {
  width: 1024,
  margin: 2,
  errorCorrectionLevel: 'H',
  color: {
    dark: '#1248b8',
    light: '#ffffff',
  },
};

async function generateQrCode() {
  fs.mkdirSync(publicDir, { recursive: true });

  const pngPath = path.join(publicDir, 'qr-code.png');
  const svgPath = path.join(publicDir, 'qr-code.svg');

  await QRCode.toFile(pngPath, VERIFY_URL, qrOptions);
  await QRCode.toFile(svgPath, VERIFY_URL, {
    ...qrOptions,
    type: 'svg',
  });

  console.log('QR code generated for:', VERIFY_URL);
  console.log('PNG:', pngPath);
  console.log('SVG:', svgPath);
}

generateQrCode().catch((error) => {
  console.error('Failed to generate QR code:', error);
  process.exit(1);
});
