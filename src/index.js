import diffObjects from './diffObjects';
import formatToJS from './formatToJS';

export default (path1, path2) => {
  const beforeFile = formatToJS(path1);
  const afterFile = formatToJS(path2);
  return diffObjects(beforeFile, afterFile);
};
