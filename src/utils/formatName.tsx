const unicodeArray = ['\u00AE', '\u2122'];

export const formatName = (text: string) =>
  text.split('').map((char, index) => {
    if (unicodeArray.includes(char)) {
      return <span key={index}>{char}</span>;
    }

    return char;
  });
