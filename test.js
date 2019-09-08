#!/usr/bin/env node

const findBinary = require('./helpers/findBinary');
const run = require('./helpers/run');

run(
  findBinary('nyc'),
  `--temp-directory`, `node_coverage`,
  `--extension`, `.ts`,
  `--exclude`, `**/*.test.ts`,
  findBinary('mocha'),
  `--require`, `ts-node/register`,
  `--require`, `source-map-support/register`,
  `--recursive`,
  `--exit`,
  `--bail`,
  `src/*.test.ts`, `src/**/*.test.ts`);

run(
  findBinary('nyc'),
  '--temp-directory', `node_coverage`,
  '--report-dir', `node_coverage`,
  `--reporter`, `html`,
  `--extension`, `.ts`,
  `--exclude`, `**/*.test.ts`,
  `report`);
