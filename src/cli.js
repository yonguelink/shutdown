#!/usr/bin/env node
const yargs = require('yargs');

async function runCommand (fn, ...args) {
  try {
    await fn(...args);
  } catch (err) {
    console.error(err.stack);
    process.exitCode = 1;
  }
}

yargs
  .command({
    command: 'shutdown',
    desc: 'Turns off the computer',
    handler () {
      runCommand(require('../src/shutdown'));
    }
  })

  .strict()
  .demandCommand(1)
  .version()
  .help()
  .parse();
