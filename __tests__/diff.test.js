import gendiff from '../src/index';

describe('test difference between flat files', () => {
  const expectedDiff = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
  }`;

  it('test diff in JSON files', () => {
    // relative path to flat JSON files
    const beforeJSON = './__tests__/fixtures/before.json';
    const afterJSON = './__tests__/fixtures/after.json';
    expect(gendiff(beforeJSON, afterJSON)).toBe(expectedDiff);
  });

  it('test diff in YAML files', () => {
    // relative path to flat YAML files
    const beforeYAML = './__tests__/fixtures/before.yml';
    const afterYAML = './__tests__/fixtures/after.yml';

    expect(gendiff(beforeYAML, afterYAML)).toBe(expectedDiff);
  });

  it('test diff in INI files', () => {
    // relative path to flat INI files
    const beforeINI = './__tests__/fixtures/before.ini';
    const afterINI = './__tests__/fixtures/after.ini';

    expect(gendiff(beforeINI, afterINI)).toBe(expectedDiff);
  });
});

describe('test difference between nested files', () => {
  const expectedDiff = `{
    common: {
        setting1: Value 1
      - setting2: 200
        setting3: true
      - setting6: {
            key: value
        }
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
    }
    group1: {
      + baz: bars
      - baz: bas
        foo: bar
    }
  - group2: {
        abc: 12345
    }
  + group3: {
        fee: 100500
    }
  }`;

  it('test diff in JSON files', () => {
    // relative path to nested JSON files
    const beforeNestedJSON = './__tests__/fixtures/beforeNested.json';
    const afterNestedJSON = './__tests__/fixtures/afterNested.json';
    expect(gendiff(beforeNestedJSON, afterNestedJSON)).toBe(expectedDiff);
  });

  it('test diff in YAML files', () => {
    // relative path to nested YAML files
    const beforeNestedYAML = './__tests__/fixtures/beforeNested.yml';
    const afterNestedYAML = './__tests__/fixtures/afterNested.yml';

    expect(gendiff(beforeNestedYAML, afterNestedYAML)).toBe(expectedDiff);
  });

  it('test diff in INI files', () => {
    // relative path to nested INI files
    const beforeNestedINI = './__tests__/fixtures/beforeNested.ini';
    const afterNestedINI = './__tests__/fixtures/afterNested.ini';

    expect(gendiff(beforeNestedINI, afterNestedINI)).toBe(expectedDiff);
  });
});
