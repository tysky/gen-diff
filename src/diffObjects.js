import _ from 'lodash';

const toString = (ast) => {
  const str = ast.reduce((acc, element) => {
    if (element.type === 'changed') {
      return `${acc}+ ${element.key}: ${element.newValue}\n- ${element.key}: ${element.oldValue}\n`;
    } else if (element.type === 'added') {
      return `${acc}+ ${element.key}: ${element.newValue}\n`;
    } else if (element.type === 'removed') {
      return `${acc}- ${element.key}: ${element.oldValue}\n`;
    }
    return `${acc}  ${element.key}: ${element.oldValue}\n`; // elememt.type === 'unchanged';
  }, '');
  return `{\n${str}}`;
};

// two objects in arguments
export default (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keysUnion = _.union(keys1, keys2);

  const getType = (key) => {
    if (keys1.includes(key) && keys2.includes(key)) {
      return obj1[key] === obj2[key] ? 'unchanged' : 'changed';
    } else if (keys1.includes(key)) {
      return 'removed';
    }
    return 'added'; // if keys2.includes(key)
  };

  const buildObj = key =>
    ({ key, oldValue: obj1[key], newValue: obj2[key], type: getType(key) });

  const ast = keysUnion.map(key => buildObj(key));

  return toString(ast);
};
