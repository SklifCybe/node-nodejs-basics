import fs from 'fs';
import fsAsync from 'fs/promises';
import path from 'path';

import { getCurrentDirname } from '../utils/index.js';
import { ERROR_FS_MESSAGE } from '../constants/index.js';

const read = async () => {
    const filePath = path.join(getCurrentDirname(import.meta.url), 'files', 'fileToRead.txt');

    try {
        const fileExist = fs.existsSync(filePath);

        if (!fileExist) {
            throw new Error(ERROR_FS_MESSAGE);
        }

        const file = await fsAsync.readFile(filePath, { encoding: 'utf-8' });

        console.log(file);
    } catch(error) {
        throw error;
    }
};

await read();