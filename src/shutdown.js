const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const receiver = require('yamaha-receiver-control/src/request');
const moment = require('moment');

module.exports = async function () {
  // Shutdown the receiver only if it's late - otherwise we might be working on something elsewhere with music
  const now = moment();
  const late = moment().hours(21).minute(30);
  if (now.isSameOrAfter(late)) {
    await receiver.turnOff();
  }

  await exec('shutdown /s /t 0 /f');
};
