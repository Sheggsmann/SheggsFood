export function secondsToMin(s: number): string {
  const _s = s % 60;
  const m = Math.floor(s / 60);
  return `${m}:${_s < 10 ? "0" : ""}${_s}`;
}
