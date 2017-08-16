import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

const formats = {
  '.json': file => JSON.parse(file),
  '.yml': file => yaml.safeLoad(file),
  '.ini': file => ini.parse(file),
};

export default (pathToFile) => {
  const file = fs.readFileSync(pathToFile, 'utf8');
  const extension = path.extname(pathToFile, 'utf8');
  return formats[extension](file);
};
