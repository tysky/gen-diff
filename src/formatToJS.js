import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const formats = {
  '.json': file => JSON.parse(file),
  '.yml': file => yaml.safeLoad(file),
};

export default (pathToFile) => {
  const file = fs.readFileSync(pathToFile);
  const extension = path.extname(pathToFile);
  return formats[extension](file);
};
