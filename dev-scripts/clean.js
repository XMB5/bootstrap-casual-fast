const {readdir, rm} = require('fs/promises');
const path = require('path');

const distDir = path.join(__dirname, '..', 'docs');
const excluded = ['CNAME', '.nojekyll'];

(async function () {
    for (let filename of await readdir(distDir)) {
        if (!excluded.includes(filename)) {
            await rm(path.join(distDir, filename), {
                recursive: true
            });
        }
    }
})().then(() => {
    process.exit(0);
}).catch(e => {
    console.error(e);
    process.exit(1);
});