const fs = require('fs-extra');
const concat = require('concat');
const nameElement = 'tinkoff-counter';
const nameDistDir = 'tinkoff-dist';

(async function build() {

  const files = [
    './dist/runtime.js',
    './dist/polyfills.js',
    './dist/scripts.js',
    './dist/main.js'
  ];

  await fs.ensureDir(nameDistDir);
  await concat(files, `${nameDistDir}/${nameElement}.js`);
  fs.copyFileSync(`${nameDistDir}/${nameElement}.js`, `../simple/${nameElement}.js`);

})();
