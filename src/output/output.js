import toString from './toString';
import plain from './plain';

export default (ast, format) => {
  switch (format) {
    case 'plain':
      return plain(ast);
    default:
      return toString(ast);
  }
};
