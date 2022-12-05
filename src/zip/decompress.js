import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

import { getCurrentDirname } from '../utils/index.js';

const decompress = async () => {
    const __dirname = getCurrentDirname(import.meta.url);

    const archiveFilePath = path.join(__dirname, 'files', 'archive.gz');
    const destinationFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

    const zip = zlib.createGunzip();
    const readableStream = fs.createReadStream(archiveFilePath);
    const writableStream = fs.createWriteStream(destinationFilePath);

    readableStream.pipe(zip).pipe(writableStream);
};

await decompress();