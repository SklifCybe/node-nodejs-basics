import path from 'path';
import { spawn } from 'child_process';

import { getCurrentDirname } from '../utils/index.js';

const spawnChildProcess = async (args) => {
    const scriptFilePath = path.join(getCurrentDirname(import.meta.url), 'files', 'script.js');

    const childProcess = spawn('node', [scriptFilePath, ...args.split(' ')]);

    process.stdin.on('data', (buffer) => {
        childProcess.stdin.write(buffer);
    });

    process.stdout.on('data', (buffer) => {
        console.log(buffer.toString('utf-8'));
    });
};

spawnChildProcess('--arg1 value1');