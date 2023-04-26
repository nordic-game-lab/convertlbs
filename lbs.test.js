const convertlbs = require('./convertlbs');

test('Converts 5 pounds to ounces and expects 80 OZ', () => {
  expect(convertlbs(5).oz).toBe(80);
});

test('Converts 5 pounds to KG and expects 2.2679851220175995 KG', () => {
  expect(convertlbs(5).kg).toBe(2.2679851220175995);
});

test('Converts 5 pounds to grams and expects 2.2679851220175995 grams', () => {
  expect(convertlbs(5).g).toBe(2267.985122017599);
});