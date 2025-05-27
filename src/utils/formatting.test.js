import { formatNumber, parseInput } from './formatting';

test('formats numbers correctly', () => {
  expect(formatNumber(1000)).toBe('1,000.00');
  expect(formatNumber(1000.5)).toBe('1,000.50');
  expect(formatNumber('not-a-number')).toBe('');
});

test('parses input string into numeric format', () => {
  expect(parseInput('1,000')).toBe('1000');
  expect(parseInput(' 1000.50 ')).toBe('1000.50');
});
