#!/usr/bin/env node
import program from 'commander';
import config from '../../package.json';
import index from '../index';

program
  .version(config.version)
  .description(config.description)
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);

index();
