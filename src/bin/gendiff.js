#!/usr/bin/env node
import program from 'commander';
import fs from 'fs';
import config from '../../package.json';
import diffObjects from '.././diffObjects';

program
.version(config.version)
.description(config.description)
.arguments('<firstConfig> <secondConfig>')
.option('-f, --format [type]', 'Output format')
.action((firstConfig, secondConfig) => {
  console.log('CONFIG====================\n', firstConfig, '\n', secondConfig);
  const firstJSON = JSON.parse(fs.readFileSync(firstConfig)); // get JS object
  const secondJSON = JSON.parse(fs.readFileSync(secondConfig)); // get JS object
  console.log(diffObjects(firstJSON, secondJSON));
});
program.parse(process.argv);
