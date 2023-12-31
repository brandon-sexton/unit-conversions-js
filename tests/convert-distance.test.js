import {
  auToKilometers,
  feetToInches,
  feetToMeters,
  feetToMiles,
  inchesToFeet,
  kilometersToAU,
  kilometersToMiles,
  metersToFeet,
  milesToFeet,
  milesToKilometers,
} from '../src/convert-distance';


test('astronomical unit to kilometers', () => {
  expect(auToKilometers(1)).toBe(149597870.7, '1 AU should be 149597870.7 km');
});

test('kilometers to astronomical unit', () => {
  expect(kilometersToAU(149597870.7)).toBe(1);
});

test('inches to feet', () => {
  expect(inchesToFeet(12)).toBe(1, '12 inches should be 1 foot');
});

test('feet to inches', () => {
  expect(feetToInches(1)).toBe(12, '1 foot should be 12 inches');
});

test('feet to miles', () => {
  expect(feetToMiles(5280)).toBe(1, '5280 feet should be 1 mile');
});

test('miles to feet', () => {
  expect(milesToFeet(1)).toBe(5280, '1 mile should be 5280 feet');
});

test('meters to feet', () => {
  expect(metersToFeet(30)).toBeCloseTo(
      98.425197, 6, 'p.19 section 2.5 test #3 - 30 meters == 98.4252 feet',
  );
});

test('feet to meters', () => {
  expect(feetToMeters(25)).toBeCloseTo(
      7.62, 2, 'p.19 section 2.5 test #4 - 25 feet should be 7.62 meters',
  );
});

test('miles to kilometers', () => {
  expect(milesToKilometers(100)).toBeCloseTo(
      160.934, 3, 'p.19 section 2.5 test #5 - 100 miles should be 160.934 km',
  );
});

test('kilometers to miles', () => {
  expect(kilometersToMiles(88)).toBeCloseTo(
      54.68, 2, 'p.19 section 2.5 test #6 - 88 km should be 54.6807 miles',
  );
});
