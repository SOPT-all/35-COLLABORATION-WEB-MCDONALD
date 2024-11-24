export const calculateLine = (element: HTMLParagraphElement): number => {
  if (!element) return 0;

  const lineHeight = 18;
  const height = element.offsetHeight;
  const lines = Math.ceil(height / lineHeight);

  return lines;
};
