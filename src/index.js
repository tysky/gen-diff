import diffObjects from './diffObjects';
import formatToJS from './formatToJS';

export default (path1, path2) => {
  const beforeFile = formatToJS(path1);
  const afterFile = formatToJS(path2);
  // const beforeFile = fs.readFileSync(path1); // get JS object
  // const firstJSON = JSON.parse(fs.readFileSync(path1)); // get JS object
  // const afterFile = fs.readFileSync(path2); // get JS object
  // const secondJSON = JSON.parse(fs.readFileSync(path2)); // get JS object
  // console.log('BEFORE =', yaml.safeLoad(beforeFile));
  // console.log('AFTER  =', afterFile);
  return diffObjects(beforeFile, afterFile);
};
