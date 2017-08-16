import gendiff from '../src/index';

describe('test difference between files', () => {
  const expectedDiff = `{
  host: hexlet.io
+ timeout: 20
- timeout: 50
- proxy: 123.234.53.22
+ verbose: true
}`;

  it('test diff in JSON files', () => {
    // relative path to flat JSON files
    const beforeJSON = './__tests__/examples/before.json';
    const afterJSON = './__tests__/examples/after.json';
    expect(gendiff(beforeJSON, afterJSON)).toBe(expectedDiff);
  });

  it('test diff in YAML files', () => {
    // relative path to flat YAML files
    const beforeYAML = './__tests__/examples/before.yml';
    const afterYAML = './__tests__/examples/after.yml';

    expect(gendiff(beforeYAML, afterYAML)).toBe(expectedDiff);
  });

  it('test diff in INI files', () => {
    // relative path to flat INI files
    const beforeINI = './__tests__/examples/before.ini';
    const afterINI = './__tests__/examples/after.ini';

    expect(gendiff(beforeINI, afterINI)).toBe(expectedDiff);
  });
});
