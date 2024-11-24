export const calculateLine = (element: HTMLParagraphElement): number => {
  if (!element) return 0;

  const computedStyle = getComputedStyle(element);

  const lineHeight =
    computedStyle.lineHeight === 'normal'
      ? parseFloat(computedStyle.fontSize) * 1.2
      : parseFloat(computedStyle.lineHeight);

  const height = element.offsetHeight;
  const lines = Math.ceil(height / lineHeight);

  console.log(lineHeight, height, lines);

  return lines;
};
