const spacing = level => `${'    '.repeat(level)}  `;

const nodeToString = (element, level) => {
  const toStr = (item) => {
    if (item instanceof Object) {
      const json = JSON.stringify(item, null, '');
      const str = json.slice(1, -1).replace(/["]+/g, '').replace(/[:]/g, ': ');
      return `{\n${spacing(level + 1)}  ${str}\n${spacing(level)}  }`;
    }
    return item;
  };
  if (element.type === 'changed') {
    return `${spacing(level)}+ ${element.key}: ${toStr(element.newValue)}\n${spacing(level)}- ${element.key}: ${toStr(element.oldValue)}`;
  } else if (element.type === 'added') {
    return `${spacing(level)}+ ${element.key}: ${toStr(element.newValue)}`;
  } else if (element.type === 'removed') {
    return `${spacing(level)}- ${element.key}: ${toStr(element.oldValue)}`;
  }
  return `${spacing(level)}  ${element.key}: ${element.oldValue}`; // element.type === 'unchanged';
};

const toString = (ast, level = 0) => {
  const str = ast.reduce((acc, element) => {
    if (element.type === 'nested') {
      return `${acc}${spacing(level)}  ${element.key}: {\n${toString(element.children, level + 1)}${spacing(level)}  }\n`;
    }
    return `${acc}${nodeToString(element, level)}\n`;
  }, '');
  return `${str}`;
};
export default ast => `{\n${toString(ast, 0)}  }`;
