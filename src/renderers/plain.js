import _ from 'lodash';

const renderProperty = {
  unchanged: (element, path) => '', // eslint-disable-line no-unused-vars
  changed: (element, path) => `Property '${path}' was updated. From '${element.oldValue}' to '${element.newValue}'\n`,
  added: (element, path) => {
    if (_.isObject(element.newValue)) {
      return `Property '${path}' was added with complex value\n`;
    }
    return `Property '${path}' was added with value: ${element.newValue}\n`;
  },
  removed: (element, path) => `Property '${path}' was removed\n`,
};


const plain = (ast) => {
  const iter = (tree, path) => {
    const str = tree.reduce((acc, element) => {
      if (element.type === 'nested') {
        return `${acc}${iter(element.children, `${path}${element.key}.`)}`;
      }
      return `${acc}${renderProperty[element.type](element, `${path}${element.key}`)}`;
    }, '');
    return str;
  };
  return iter(ast, '');
};


export default plain;
