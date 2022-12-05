import { Transform } from 'stream';

const transform = async () => {
    const reverseString = new Transform({
        transform(chunk, _, callback) {
            const reverse = chunk.toString('utf-8').split('').reverse().join('');
            callback(null, reverse);
        },
    });

    process.stdin.pipe(reverseString).pipe(process.stdout);
};

await transform();