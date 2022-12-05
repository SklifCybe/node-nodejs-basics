import zlib from 'zlib';
import fs from 'fs';
import path from 'path';

import { getCurrentDirname } from '../utils/index.js';

const compress = async () => {
    const __dirname = getCurrentDirname(import.meta.url);

    const sourceFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const destinationFile = path.join(__dirname, 'files', 'archive.gz');

    const zip = zlib.createGzip();
    const readableStream = fs.createReadStream(sourceFile);
    const writableStream = fs.createWriteStream(destinationFile);

    readableStream.pipe(zip).pipe(writableStream);
};

await compress();