import _ from 'lodash';

const toString = (ast) => {
  const str = ast.reduce((acc, element) => {
    if (element.type === 'changed') {
      return `${acc}+ ${element.key}: ${element.value2}\n- ${element.key}: ${element.value1}\n`;
    } else if (element.type === 'new') {
      return `${acc}+ ${element.key}: ${element.value2}\n`;
    } else if (element.type === 'removed') {
      return `${acc}- ${element.key}: ${element.value1}\n`;
    }
    return `${acc}  ${element.key}: ${element.value1}\n`; // elememt.type === 'equal';
  }, '');
  return `{\n${str}}`;
};

// two objects in arguments
export default (first, second) => {
  const ast = [];
  const keys1 = Object.keys(first);
  const keys2 = Object.keys(second);
  const keysJoint = _.intersection(keys1, keys2);
  const keysUniq1 = _.difference(keys1, keys2);
  const keysUniq2 = _.difference(keys2, keys1);

  const buildObj = (item) => {
    let typeValue;
    if (keysJoint.includes(item)) {
      typeValue = first[item] === second[item] ? 'equal' : 'changed';
    } else if (keysUniq1.includes(item)) {
      typeValue = 'removed';
    } else if (keysUniq2.includes(item)) {
      typeValue = 'new';
    }
    ast.push({ key: item, value1: first[item], value2: second[item], type: typeValue });
  };

  keys1.forEach(buildObj);
  keysUniq2.forEach(buildObj);
  return toString(ast);
};
