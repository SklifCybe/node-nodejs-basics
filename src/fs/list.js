import fs from 'fs';
import fsAsync from 'fs/promises';
import path from 'path';

import { getCurrentDirname } from '../utils/index.js';
import { ERROR_FS_MESSAGE } from '../constants/index.js';

const list = async () => {
    const folderPath = path.join(getCurrentDirname(import.meta.url), 'files');

    try {
        const folderExist = fs.existsSync(folderPath);

        if (!folderExist) {
            throw new Error(ERROR_FS_MESSAGE);
        }

        const files = await fsAsync.readdir(folderPath);

        console.log(files);
    } catch(error) {
        throw error;
    }
};

await list();