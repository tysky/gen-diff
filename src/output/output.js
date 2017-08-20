import toString from './toString';
import flat from './flat';

export default (ast, format) => {
  switch (format) {
    case 'plain':
      return flat(ast);
    default:
      return toString(ast);
  }
};
