const nodeToString = (element, name) => {
  if (element.type === 'changed') {
    return `Property '${name}' was updated. From '${element.oldValue}' to '${element.newValue}'\n`;
  } else if (element.type === 'added') {
    return element.newValue instanceof Object
    ? `Property '${name}' was added with complex value\n`
    : `Property '${name}' was added with value: ${element.newValue}\n`;
  } else if (element.type === 'removed') {
    return `Property '${name}' was removed\n`;
  }
  return ''; // element.type === 'unchanged';
};


const plain = (ast) => {
  const iter = (tree, name) => {
    const str = tree.reduce((acc, element) => {
      if (element.type === 'nested') {
        return `${acc}${iter(element.children, `${name}${element.key}.`)}`;
      }
      return `${acc}${nodeToString(element, `${name}${element.key}`)}`;
    }, '');
    return str;
  };
  return iter(ast, '');
};


export default plain;
