const nodeToString = (acc, element, level) => {
  if (element.type === 'changed') {
    return `${acc}Property '${element.key}' was updated. From '${element.oldValue}' to '${element.newValue}'\n`;
  } else if (element.type === 'added') {
    return `${acc}Property '${element.newValue}' was added\n`;
  } else if (element.type === 'removed') {
    return `${acc}Property '${element.oldValue}' was removed\n`;
  }
  return `${acc}Property '${element.key}' was added with complex value`;
  // return `${acc}${spacing(level)}  ${element.key}: ${element.oldValue}\n`; // element.type === 'unchanged';

}


const flat = (ast, level = 0) => {
  const str = ast.reduce((acc, element) => {
    if (element.type === 'nested') {
      return `${acc}${spacing(level)}  ${element.key}: {\n${toString(element.children, level + 1)}${spacing(level)}  }\n`;
    }
    return nodeToString(acc, element, level);
  }, '');
  return `${str}`;
};



export default flat;
