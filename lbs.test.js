const convertlbs = require('./convertlbs');

test('Converts 5 pounds to OZ, Kg, and G', () => {
  expect(convertlbs(5)).toBe({ oz: 80, kg: 2.2679851220175995, g: 2267.985122017599 });
});