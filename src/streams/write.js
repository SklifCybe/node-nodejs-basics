import fs from 'fs';
import path from 'path';

import { getCurrentDirname } from '../utils/index.js';

const write = async () => {
    const filePath = path.join(getCurrentDirname(import.meta.url), 'files', 'fileToWrite.txt');

    const writeStream = fs.createWriteStream(filePath, 'utf-8');

    process.stdin.on('data', (buffer) => {
        writeStream.write(buffer);
    });
};

await write();