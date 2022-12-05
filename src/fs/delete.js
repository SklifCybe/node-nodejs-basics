import path from 'path';
import fs from 'fs';
import fsAsync from 'fs/promises';

import { getCurrentDirname } from '../utils/index.js';
import { ERROR_FS_MESSAGE } from '../constants/index.js';

const remove = async () => {
    const filePath = path.join(getCurrentDirname(import.meta.url), 'files', 'fileToRemove.txt');

    try {
        const existFile = fs.existsSync(filePath);

        if (!existFile) {
            throw new Error(ERROR_FS_MESSAGE);
        }

        await fsAsync.unlink(filePath);
    } catch(error) {
        throw error;
    }
};

await remove();