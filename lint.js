#!/usr/bin/env node

const findBinary = require('./helpers/findBinary');
const run = require('./helpers/run');

run(
  findBinary('eslint'),
  `-c`, `${__dirname}/lint.json`,
  `--ignore-pattern`, `node_*`,
  `--ignore-pattern`, `*.test*.ts`,
  `--ext`, `.ts`,
  `--resolve-plugins-relative-to`, __dirname,
  ...process.argv.slice(2)
);
