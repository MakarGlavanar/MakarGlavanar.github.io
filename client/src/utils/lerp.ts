export function lerp(
  start: number,
  end: number,
  amt: number,
  delta: number
): number {
  if (Math.abs(start - end) < delta) {
    return start;
  }

  return (1 - amt) * start + amt * end;
}
