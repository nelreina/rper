const fs = require('fs-extra');
const path = require('path');

const publicPath = path.resolve(__dirname, '../../public');
const langPath = path.resolve(__dirname, './lang');

(async () => {
  try {
    fs.copy(langPath, publicPath);
    console.info('Copied succesfully!');
  } catch (error) {
    console.error(error);
  }
})();
