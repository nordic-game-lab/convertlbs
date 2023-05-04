const convert = require('./convertlbs');
const convertoz = convert.convertoz;


test('Converts 5 ounces to kg and expects 0.1417474627204173 kg', () => {
  expect(convertoz(5).kg).toBe(0.1417474627204173);
});

test('Converts 5 oz to lbs and expects 0.3125 lbs', () => {
  expect(convertoz(5).lbs).toBe(0.3125);
});

test('Converts 5 oz to grams and expects 141.75 grams', () => {
  expect(convertoz(5).g).toBe(141.75);
});
