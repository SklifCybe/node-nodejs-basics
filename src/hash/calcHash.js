import fs from 'fs/promises';
import crypto from 'crypto';
import path from 'path';

import { getCurrentDirname } from '../utils/index.js';

const calculateHash = async () => {
    const filePath = path.join(getCurrentDirname(import.meta.url), 'files', 'fileToCalculateHashFor.txt');

    try {
        const fileText = await fs.readFile(filePath);
        
        const hash = crypto.createHash('sha256').update(fileText).digest('hex');

        console.log(hash)
    } catch(error) {
        throw error;
    }
};

await calculateHash();