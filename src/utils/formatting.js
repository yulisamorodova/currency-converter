export const formatNumber = (value) => {
  const number = parseFloat(value);
  if (isNaN(number)) return '';
  return number.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const parseInput = (value) =>
  value.replace(/[,\s]/g, '');
