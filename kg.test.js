const convert = require('./convertlbs');
const convertkg = convert.convertkg;


test('Converts 5 kilograms to ounces and expects 176.37 OZ', () => {
  expect(convertkg(5).oz).toBe(176.37);
});

test('Converts 5 kg to lbs and expects 11.0231 lbs', () => {
  expect(convertkg(5).lbs).toBe(11.025);
});

test('Converts 5 kg to grams and expects 5000 grams', () => {
  expect(convertkg(5).g).toBe(5000);
});

