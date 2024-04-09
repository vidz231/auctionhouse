export const getPattern = (url: string, pattern: RegExp) => {
  // url: string;
  // pattern: RegExp;
  //   const url: string = "http://localhost:8080/api/messages/1/receiver";
  //   const pattern: RegExp = /\/(\d+)\/receiver$/;
  const matches: RegExpMatchArray | null = url.match(pattern);
  if (matches && matches.length > 1) {
    const number: string = matches[1];
    return number;
  } else {
    return null;
  }
};
