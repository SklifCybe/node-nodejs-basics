import fs from 'fs';
import fsAsync from 'fs/promises'
import path from 'path';

import { getCurrentDirname } from '../utils/index.js';
import { ERROR_FS_MESSAGE } from '../constants/index.js'

const copy = async () => {
    const filesFolderPath = path.join(getCurrentDirname(import.meta.url), 'files');
    const copyFilesFolderPath = path.join(getCurrentDirname(import.meta.url), 'files_copy');

    try {
        const filesFolderExist = fs.existsSync(filesFolderPath);
        const copyFilesFolderExist = fs.existsSync(copyFilesFolderPath);
        
        if (!filesFolderExist || copyFilesFolderExist) throw new Error(ERROR_FS_MESSAGE);

        await fsAsync.cp(filesFolderPath, copyFilesFolderPath, { recursive: true });
    } catch(error) {
        throw error;
    }
};

await copy();