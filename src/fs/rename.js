import path from 'path';
import fs from 'fs';
import fsAsync from 'fs/promises';

import { getCurrentDirname } from '../utils/index.js';
import { ERROR_FS_MESSAGE } from '../constants/index.js';

const rename = async () => {
    const oldFilePath = path.join(getCurrentDirname(import.meta.url), 'files', 'wrongFilename.txt');
    const newFilePath = path.join(getCurrentDirname(import.meta.url), 'files', 'properFilename.md');

    try {
        const oldFileExist = fs.existsSync(oldFilePath);
        const newFileExist = fs.existsSync(newFilePath);

        if (!oldFileExist || newFileExist) {
            throw new Error(ERROR_FS_MESSAGE);
        }

        await fsAsync.rename(oldFilePath, newFilePath);
    } catch(error) {
        throw error;
    }
};

await rename();