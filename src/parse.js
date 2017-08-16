import yaml from 'js-yaml';
import ini from 'ini';

const formats = {
  '.json': file => JSON.parse(file),
  '.yml': file => yaml.safeLoad(file),
  '.ini': file => ini.parse(file),
};

export default obj => formats[obj.extension](obj.file);
