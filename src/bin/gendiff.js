#!/usr/bin/env node
import program from 'commander';
import config from '../../package.json';
import gendiff from '..';

program
.version(config.version)
.description(config.description)
.arguments('<firstConfig> <secondConfig>')
.option('-f, --format [type]', 'Output format')
.action((firstConfig, secondConfig) => {
  console.log(gendiff(firstConfig, secondConfig));
});
program.parse(process.argv);
