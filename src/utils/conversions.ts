export const labelToName = (value: string) =>
  value.toLowerCase().replace(/ /g, "-");

export const labelToOption = (label: string) => ({
  label,
  name: labelToName(label),
});
