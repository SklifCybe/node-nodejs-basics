import fs from 'fs';
import fsAsync from 'fs/promises';
import path from 'path';

import { getCurrentDirname } from '../utils/index.js';
import { ERROR_FS_MESSAGE } from '../constants/index.js';

const create = async () => {
    const filePath = path.join(getCurrentDirname(import.meta.url), 'files', 'fresh.txt');

    try {
        const fileExist = fs.existsSync(filePath);

        if (fileExist) {
            throw new Error(ERROR_FS_MESSAGE);
        }

        await fsAsync.writeFile(filePath, 'I am fresh and young');
    } catch(error) {
        throw error;
    }
};

await create();
