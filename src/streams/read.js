import fs from 'fs';
import path from 'path';

import { getCurrentDirname } from '../utils/index.js';

const read = async () => {
    const filePath = path.join(getCurrentDirname(import.meta.url), 'files', 'fileToRead.txt');

    const readStream = fs.createReadStream(filePath, 'utf-8');

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString() + '\n');
    });
};

await read();