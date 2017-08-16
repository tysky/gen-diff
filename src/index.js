/*  import fs from 'fs';

export default () => {
  console.log('INDEX!!!!!!!!!!!!');
  // console.log('EXIST!!!!!!!!', fs.existsSync('file.txt'));
  // console.log(fs.realpathSync('PATH!!!!!!!!!', '/', 'utf8'));
  const obj = fs.readFileSync('/home/dmitry/my_projects/hexlet_projects/
              project-lvl2-s117/src/before.json', 'utf8');
  console.log(obj);
  console.log(typeof JSON.parse(obj));
  // console.log(JSON.parse(obj));
  console.log('FINISH!!!!!!!!!!!!!!!!!!');
};  */
import program from 'commander';
import fs from 'fs';
import config from '../package.json';
import diffObjects from './diffObjects';

export default () => {
  program
  .version(config.version)
  .description(config.description)
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'Output format')
  .action((firstConfig, secondConfig) => {
    // console.log(firstConfig, secondConfig);
    const firstJSON = JSON.parse(fs.readFileSync(firstConfig)); // get JS object
    const secondJSON = JSON.parse(fs.readFileSync(secondConfig)); // get JS object
    console.log(diffObjects(firstJSON, secondJSON));
  });
  program.parse(process.argv);
};
