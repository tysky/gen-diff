import fs from 'fs';
import path from 'path';
import diffObjects from './diffObjects';
import parse from './parse';

const getFile = (pathToFile) => {
  const data = fs.readFileSync(pathToFile, 'utf8');
  const extension = path.extname(pathToFile, 'utf8');
  return { data, extension };
};

export default (path1, path2) => {
  const obj1 = parse(getFile(path1));
  const obj2 = parse(getFile(path2));
  return diffObjects(obj1, obj2);
};
