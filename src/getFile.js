import fs from 'fs';
import path from 'path';


export default (pathToFile) => {
  const file = fs.readFileSync(pathToFile, 'utf8');
  const extension = path.extname(pathToFile, 'utf8');
  return { file, extension };
};
