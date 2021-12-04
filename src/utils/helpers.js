export const costStringFromObject = (costObject) => {
  return Object.entries(costObject)
    .map((entry) => `${entry[0]}: ${entry[1]}`)
    .join(", ");
};
