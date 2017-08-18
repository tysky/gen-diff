const spacing = level => `${'    '.repeat(level)}  `;

const nodeToString = (acc, element, level) => {
  const toStr = (item) => {
    if (item instanceof Object) {
      const json = JSON.stringify(item, null, '');
      const str = json.slice(1, -1).replace(/["]+/g, '').replace(/[:]/g, ': ');
      return `{\n${spacing(level + 1)}  ${str}\n${spacing(level)}  }`;
    }
    return item;
  };
  if (element.type === 'changed') {
    return `${acc}${spacing(level)}+ ${element.key}: ${toStr(element.newValue)}\n${spacing(level)}- ${element.key}: ${toStr(element.oldValue)}\n`;
  } else if (element.type === 'added') {
    return `${acc}${spacing(level)}+ ${element.key}: ${toStr(element.newValue)}\n`;
  } else if (element.type === 'removed') {
    return `${acc}${spacing(level)}- ${element.key}: ${toStr(element.oldValue)}\n`;
  }
  return `${acc}${spacing(level)}  ${element.key}: ${element.oldValue}\n`; // element.type === 'unchanged';
};

const toString = (ast, level = 0) => {
  const str = ast.reduce((acc, element) => {
    if (element.hasChildren) {
      return `${acc}${spacing(level)}  ${element.key}: {\n${toString(element.values, level + 1)}${spacing(level)}  }\n`;
    }
    return nodeToString(acc, element, level);
  }, '');
  return `${str}`;
};
export default ast => `{\n${toString(ast, 0)}  }`;
