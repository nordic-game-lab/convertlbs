const convert = require('./convertlbs');
const convertoz = convert.convertoz;


test('Converts 5 ounces to kg and expects 0.141748 kg', () => {
  expect(convertoz(5).kg).toBe(0.141748);
});

test('Converts 5 oz to lbs and expects 0.3125 lbs', () => {
  expect(convertoz(5).lbs).toBe(0.3125);
});

test('Converts 5 oz to grams and expects 141.748 grams', () => {
  expect(convertoz(5).g).toBe(141.748);
});
