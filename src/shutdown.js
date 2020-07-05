const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

module.exports = async function () {
  await exec('shutdown /s /t 0 /f');
};
