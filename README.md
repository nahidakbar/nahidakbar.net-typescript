# Typescript Configuration

Compiling all typescript associated packages and configuration
files into one package so it can be separetely maintained
across projects.

For

* Compiling typescript files using tsc
* Linting typescript files using eslint and air-bnb eslint configuration
* Running typescript tests with mocha and producing istanbul (nyc) coverage report

## Coding Style Assumptions

* Assumes it is working with a single project repo.
* Assumes all source code goes in src folder.
* Assumes compiled js goes in dist folder.
* Assumes tests are kept in source folder and have the suffix .test.ts

## Getting Started

Add to dev depencies:

    npm i -D @permaconn.com/typescript


Scripts:

    "scripts": {
      "build": "ts-build",
      "test": "ts-test",
      "lint": "ts-lint src/"
    },
