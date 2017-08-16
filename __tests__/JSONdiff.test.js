import gendiff from 'gendiff';

describe('JSON', () => {
  it('test diff in JSON files', () => {
    const pathToFile1 = '__tests__/examples/before.json';
    const pathToFile2 = '__tests__/examples/after.json';
    const diff = gendiff(pathToFile1, pathToFile2);
    const expectedDiff = `{
      host: hexlet.io
    + timeout: 20
    - timeout: 50
    - proxy: 123.234.53.22
    + verbose: true
  }`;

    expect(expectedDiff).toBe(diff);
  });
});
