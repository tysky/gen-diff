import _ from 'lodash';
import toString from './toString';

// two objects in arguments
const buildAST = (obj1, obj2) => {
  const keys1 = obj1 === undefined ? [] : Object.keys(obj1);
  const keys2 = obj2 === undefined ? [] : Object.keys(obj2);
  const keysUnion = _.union(keys1, keys2);

  const getType = (key) => {
    if (keys1.includes(key) && keys2.includes(key)) {
      return obj1[key] === obj2[key] ? 'unchanged' : 'changed';
    } else if (keys1.includes(key)) {
      return 'removed';
    }
    return 'added'; // if keys2.includes(key)
  };

  const buildNode = (key) => {
    const oldValue = obj1 === undefined ? undefined : obj1[key];
    const newValue = obj2 === undefined ? undefined : obj2[key];

    if (oldValue instanceof Object && newValue instanceof Object) {
      return {
        key,
        values: buildAST(oldValue, newValue),
        hasChildren: true,
      };
    }
    return { key, oldValue, newValue, type: getType(key), hasChildren: false };
  };

  return keysUnion.map(buildNode);
};

export default (obj1, obj2) => {
  const ast = buildAST(obj1, obj2);
  return toString(ast);
};
