const getNewAST = ast => ast.map((element) => {
  if (element.type === 'nested') {
    return { [element.key]: getNewAST(element.children) };
  } else if (element.type === 'added') {
    return { [element.key]: { type: 'added', newValue: element.newValue } };
  } else if (element.type === 'removed') {
    return { [element.key]: { type: 'removed', oldValue: element.oldValue } };
  } else if (element.type === 'unchanged') {
    return { [element.key]: { type: 'unchanged', value: element.oldValue } };
  }
  // checking for 'changed' type
  return { [element.key]: { type: 'changed', oldValue: element.oldValue, newValue: element.newValue } };
});

export default ast => JSON.stringify(getNewAST(ast));
