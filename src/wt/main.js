import os from 'os';
import path from 'path';
import { Worker } from 'worker_threads';

import { getCurrentDirname } from '../utils/index.js';

const performCalculations = async () => {
    const cpus = os.cpus();
    const workerPath = path.join(getCurrentDirname(import.meta.url), 'worker.js');
    let number = 10;

    const workerResults = await Promise.allSettled(cpus.map(() => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, {
                workerData: number++,
            });

            worker.on('message', resolve);
            worker.on('error', reject);
        });
    }));

    const results = workerResults.map(({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null,  
    }));

    console.log(results);

    return results;
};

await performCalculations();