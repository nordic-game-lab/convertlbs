const convert = require('./convertlbs');
const convertg = convert.convertg;


test('Converts 5 grams to kg and expects 0.005 kg', () => {
  expect(convertg(5).kg).toBe(0.005);
});

test('Converts 5 grams to lbs and expects 0.011022927689594356 lbs', () => {
  expect(convertg(5).lbs).toBe(0.011022927689594356);
});

test('Converts 5 grams to grams and expects 0.1763668430335097 oz', () => {
  expect(convertg(5).oz).toBe(0.1763668430335097);
});
