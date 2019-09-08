#!/usr/bin/env node

const findBinary = require('./helpers/findBinary');
const run = require('./helpers/run');
const rimraf = require('./helpers/rimraf');
const fs = require('fs');
const path = require('path');

rimraf('dist');
fs.mkdirSync('dist');

const STATIC_DIRS = [
  'static',
  'routes'
];

STATIC_DIRS.forEach(staticDir => {
  const dir = path.join('src', staticDir);
  if (fs.existsSync(dir)) {
    run('cp', '-r', dir, 'dist');
  }
});

run(
  findBinary('tsc'),
  `--declaration`,
  `--declarationMap`,
  `--sourceMap`,
  `--outDir`, `dist`,
  `--strict`,
  ...process.argv.slice(2)
);
