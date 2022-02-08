export const getProperSize = (screenHeight: number, ratio = 0.3, maxSize = 280) => {
  const size = screenHeight * ratio;
  if (size > maxSize) return maxSize;
  return size;
};
