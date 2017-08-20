import _ from 'lodash';

const spacing = level => `${'    '.repeat(level)}  `;

const toStr = (item, level) => {
  if (_.isObject(item)) {
    const json = JSON.stringify(item, null, '');
    const str = json.slice(1, -1).replace(/["]+/g, '').replace(/[:]/g, ': ');
    return `{\n${spacing(level + 1)}  ${str}\n${spacing(level)}  }`;
  }
  return item;
};

const toString = (ast, level = 0) => {
  const str = ast.reduce((acc, element) => {
    if (element.type === 'nested') {
      return `${acc}${spacing(level)}  ${element.key}: {\n${toString(element.children, level + 1)}${spacing(level)}  }\n`;
    } else if (element.type === 'changed') {
      return `${acc}${spacing(level)}+ ${element.key}: ${toStr(element.newValue, level)}\n${spacing(level)}- ${element.key}: ${toStr(element.oldValue, level)}\n`;
    } else if (element.type === 'added') {
      return `${acc}${spacing(level)}+ ${element.key}: ${toStr(element.newValue, level)}\n`;
    } else if (element.type === 'removed') {
      return `${acc}${spacing(level)}- ${element.key}: ${toStr(element.oldValue, level)}\n`;
    }
    return `${acc}${spacing(level)}  ${element.key}: ${element.oldValue}\n`; // element.type === 'unchanged';
  }, '');
  return `${str}`;
};
export default ast => `{\n${toString(ast, 0)}  }`;
