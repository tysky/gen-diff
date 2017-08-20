const getObj = ast => ast.reduce((acc, element) => {
  if (element.type === 'nested') {
    return { ...acc, [element.key]: getObj(element.children) };
  } else if (element.type === 'added') {
    return { ...acc, [element.key]: { type: 'added', newValue: element.newValue } };
  } else if (element.type === 'removed') {
    return { ...acc, [element.key]: { type: 'removed', oldValue: element.oldValue } };
  } else if (element.type === 'unchanged') {
    return { ...acc, [element.key]: { type: 'unchanged', value: element.oldValue } };
  }
  // checking for 'changed' type
  return { ...acc,
    [element.key]: { type: 'changed', oldValue: element.oldValue, newValue: element.newValue } };
}, {});

export default ast => JSON.stringify(getObj(ast));
