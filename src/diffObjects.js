import _ from 'lodash';
import output from './output/output';

// two objects in arguments
const buildAST = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keysUnion = _.union(keys1, keys2);

  const getType = (key) => {
    if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
      return 'nested';
    } else if (keys1.includes(key) && keys2.includes(key)) {
      return obj1[key] === obj2[key] ? 'unchanged' : 'changed';
    } else if (keys1.includes(key)) {
      return 'removed';
    }
    return 'added'; // if keys2.includes(key)
  };

  const getChildren = (key) => {
    if (getType(key) === 'nested') {
      return buildAST(obj1[key], obj2[key]);
    }
    return [];
  };

  const buildNode = (key) => {
    const oldValue = obj1[key];
    const newValue = obj2[key];
    return { key, oldValue, newValue, type: getType(key), children: getChildren(key) };
  };

  return keysUnion.map(buildNode);
};

export default (obj1, obj2, format) => {
  const ast = buildAST(obj1, obj2);
  return output(ast, format);
};
