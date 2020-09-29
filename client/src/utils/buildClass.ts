export function buildClass(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
