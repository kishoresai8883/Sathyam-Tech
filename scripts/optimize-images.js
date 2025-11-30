import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const logFile = path.join(rootDir, 'optimization-log.txt');

function log(message) {
    console.log(message);
    fs.appendFileSync(logFile, message + '\n');
}

const images = [
    { path: 'src/assets/bgImage1.webp', width: 1200, quality: 80 },
    { path: 'src/assets/bgImage2.webp', width: 1200, quality: 80 },
    { path: 'src/assets/hero_img1.webp', width: 1200, quality: 80 },
    { path: 'src/assets/Logo.webp', width: 220, quality: 90 },
    { path: 'src/assets/bluewave_project_img.webp', width: 500, quality: 80 },
    { path: 'src/assets/biomart_project_img.webp', width: 500, quality: 80 },
    { path: 'src/assets/about.webp', width: 500, quality: 80 },
    { path: 'src/assets/work_mobile_app.webp', width: 500, quality: 80 },
];

async function processImages() {
    fs.writeFileSync(logFile, 'Starting image optimization (Buffer method)...\n');
    log('Starting image optimization (Buffer method)...');

    for (const img of images) {
        const filePath = path.join(rootDir, img.path);
        if (fs.existsSync(filePath)) {
            try {
                const originalStats = fs.statSync(filePath);
                log(`Processing ${img.path} (${(originalStats.size / 1024).toFixed(2)} KB)...`);

                // Read file to buffer first to avoid file locking issues
                const inputBuffer = fs.readFileSync(filePath);

                const outputBuffer = await sharp(inputBuffer)
                    .resize({ width: img.width, withoutEnlargement: true })
                    .webp({ quality: img.quality })
                    .toBuffer();

                fs.writeFileSync(filePath, outputBuffer);
                const newStats = fs.statSync(filePath);
                log(`Done! New size: ${(newStats.size / 1024).toFixed(2)} KB (Saved ${((originalStats.size - newStats.size) / 1024).toFixed(2)} KB)`);
            } catch (error) {
                log(`Error processing ${img.path}: ${error.message}`);
            }
        } else {
            log(`File not found: ${img.path}`);
        }
    }
    log('Image optimization complete!');
}

processImages().catch(err => log(`Fatal error: ${err.message}`));
