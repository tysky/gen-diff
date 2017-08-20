const toJSON = ast => ast.reduce((acc, element) => {
  switch (element.type) {
    case 'nested':
      return `${acc}${JSON.stringify({ [element.key]: toJSON(element.children) })}`;
    case 'added':
      return `${acc}${JSON.stringify({ [element.key]: { type: 'added', newValue: element.newValue } })}`;
    case 'removed':
      return `${acc}${JSON.stringify({ [element.key]: { type: 'removed', oldValue: element.oldValue } })}`;
    case 'changed':
      return `${acc}${JSON.stringify({ [element.key]: { type: 'changed', oldValue: element.oldValue, newValue: element.oldValue } })}`;
    case 'unchanged':
      return `${acc}${JSON.stringify({ [element.key]: { type: 'unchanged', value: element.oldValue } })}`;
    default:
      return '';
  }
}, '');
//
// const getObj = ast => ast.reduce((acc, element) => {
//   if (element.type === 'nested') {
//     return { ...acc, [element.key]: getObj(element.children) };
//   } else if (element.type === 'added') {
//     return { ...acc, [element.key]: { type: 'added', newValue: element.newValue } };
//   } else if (element.type === 'removed') {
//     return { ...acc, [element.key]: { type: 'removed', oldValue: element.oldValue } };
//   } else if (element.type === 'unchanged') {
//     return { ...acc, [element.key]: { type: 'unchanged', value: element.oldValue } };
//   }
//   // checking for 'changed' type
//   return { ...acc,
//     [element.key]: { type: 'changed', oldValue: element.oldValue, newValue: element.newValue } };
// }, {});

export default toJSON;
