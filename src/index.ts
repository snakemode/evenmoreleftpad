export function evenMoreLeftPad (str: string, len: number, ch: string = ' '): string {
  return ch.repeat(len) + str;
}
