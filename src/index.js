import fs from 'fs';
import path from 'path';
import diffObjects from './diffObjects';
import parse from './parse';


export default (path1, path2, format) => {
  const obj1 = parse({
    data: fs.readFileSync(path1, 'utf8'),
    extension: path.extname(path1, 'utf8') });
  const obj2 = parse({
    data: fs.readFileSync(path2, 'utf8'),
    extension: path.extname(path2, 'utf8') });
  return diffObjects(obj1, obj2, format);
};
