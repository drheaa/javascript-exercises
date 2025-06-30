const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Rhea', () => {
    expect(values.firstName).toEqual('Rhea');
  });
  test.skip('lastName is Aucharaz', () => {
    expect(values.lastName).toEqual('Aucharaz');
  });
  test.skip('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test.skip('birthYear is 2003', () => {
    expect(values.birthYear).toEqual(2003);
  });
  test.skip('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hi, how are you? My name is Rhea Aucharaz and I am 22 years old.');
  });
});

describe('step 3', () => {
  test.skip('fullName is Rhea Aucharaz', () => {
    expect(values.fullName).toEqual('Rhea Aucharaz');
  });
  test.skip('age is 22', () => {
    expect(values.age).toEqual(22);
  });
});
