import yaml from 'js-yaml';
import ini from 'ini';

const formats = {
  '.json': data => JSON.parse(data),
  '.yml': data => yaml.safeLoad(data),
  '.ini': data => ini.parse(data),
};

export default obj => formats[obj.extension](obj.data);
