import toString from './toString';
import plain from './plain';
import toJSON from './toJSON';

export default (ast, format) => {
  switch (format) {
    case 'plain':
      return plain(ast);
    case 'json':
      return toJSON(ast);
    default:
      return toString(ast);
  }
};
