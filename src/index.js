import fs from 'fs';
import diffObjects from './diffObjects';

export default (path1, path2) => {
  const firstJSON = JSON.parse(fs.readFileSync(path1)); // get JS object
  const secondJSON = JSON.parse(fs.readFileSync(path2)); // get JS object
  return diffObjects(firstJSON, secondJSON);
};
