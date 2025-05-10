export const calcPercent = (value, total) => {
  if (total === 0) return 0; // Avoid division by zero
  return ((value / total) * 100); // Return percentage with two decimal places
}
