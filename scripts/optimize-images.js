import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');

const images = [
    { path: 'src/assets/bgImage1.webp', width: 1920, quality: 75 },
    { path: 'src/assets/bgImage2.webp', width: 1920, quality: 75 },
    { path: 'src/assets/hero_img1.webp', width: 1500, quality: 80 },
    { path: 'src/assets/Logo.webp', width: 352, quality: 90 },
    { path: 'src/assets/bluewave_project_img.webp', width: 640, quality: 80 },
    { path: 'src/assets/biomart_project_img.webp', width: 640, quality: 80 },
    { path: 'src/assets/about.webp', width: 626, quality: 80 },
    { path: 'src/assets/work_mobile_app.webp', width: 640, quality: 80 },
];

async function processImages() {
    console.log('Starting image optimization...');
    for (const img of images) {
        const filePath = path.join(rootDir, img.path);
        if (fs.existsSync(filePath)) {
            try {
                const originalStats = fs.statSync(filePath);
                console.log(`Processing ${img.path} (${(originalStats.size / 1024).toFixed(2)} KB)...`);

                const buffer = await sharp(filePath)
                    .resize({ width: img.width, withoutEnlargement: true })
                    .webp({ quality: img.quality })
                    .toBuffer();

                fs.writeFileSync(filePath, buffer);
                const newStats = fs.statSync(filePath);
                console.log(`Done! New size: ${(newStats.size / 1024).toFixed(2)} KB (Saved ${((originalStats.size - newStats.size) / 1024).toFixed(2)} KB)`);
            } catch (error) {
                console.error(`Error processing ${img.path}:`, error);
            }
        } else {
            console.warn(`File not found: ${img.path}`);
        }
    }
    console.log('Image optimization complete!');
}

processImages();
