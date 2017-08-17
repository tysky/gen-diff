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
const buildAST = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keysUnion = _.union(keys1, keys2);

  const getType = (key) => {
    if (keys1.includes(key) && keys2.includes(key)) {
      // return obj1[key] === obj2[key] ? 'unchanged' : 'changed';
      return _.isEqual(obj1[key], obj2[key]) ? 'unchanged' : 'changed';
    } else if (keys1.includes(key)) {
      return 'removed';
    }
    return 'added'; // if keys2.includes(key)
  };

  const buildNode = (key) => {
    const oldValue = obj1[key];
    const newValue = obj2[key];
    if (obj1[key] !== Object && obj2[key] !== Object) {
      return { key, oldValue, newValue, type: getType(key) };
    }
    return {
      key,
      oldValue: buildAST(oldValue, newValue),
      newValue: buildAST(oldValue, newValue),
      type: getType(key),
    };
  };

  return keysUnion.map(buildNode);
};

export default (obj1, obj2) => {
  const ast = buildAST(obj1, obj2);
  // console.log('OBJECT==================\n', ast);
  return toString(ast);
};
