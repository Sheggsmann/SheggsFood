export function codeFromMap(codeArr: number[]): string {
  let s = "";
  for (const num of codeArr) {
    if (num != -1) {
      s += `${num}`;
    }
  }
  return s;
}

export function trimText(text: string, maxLength: number = 40): string {
  if (text.length > maxLength) return text.substring(0, maxLength - 3) + "...";
  return text;
}
