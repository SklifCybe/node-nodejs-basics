import path from 'path';
import { fileURLToPath } from 'url';

export const getCurrentDirname = (fileUrl) => {
    const __filename = fileURLToPath(fileUrl);
    return path.dirname(__filename);
};
