const fs = require('fs');
const path = require('path');

const binDirectories = [
  path.join(__dirname, '..', 'node_modules', '.bin'),
  path.join(__dirname, '..', '.bin')
];

function findBinary(bin) {
  for (let dir of binDirectories) {
    const binPath = path.join(dir, bin);
    if (fs.existsSync(binPath)) {
      return binPath;
    }
  }
  throw new Error(`${bin} not found`);
}

module.exports = findBinary;
