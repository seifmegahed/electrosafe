// eslint-disable-next-line import/prefer-default-export
export const textShrink = (text: string, maxChars: number) => {
  if (text.length < maxChars) return text;
  return `${text.slice(0, maxChars).trim()}...`;
};
