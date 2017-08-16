import diffObjects from './diffObjects';
import getFile from './getFile';
import parse from './parse';


export default (path1, path2) => {
  const obj1 = parse(getFile(path1));
  const obj2 = parse(getFile(path2));
  return diffObjects(obj1, obj2);
};
