export function evenMoreLeftPad (str: string, len: number, ch: string = ' ') {
  return str + ch.repeat(len - str.length)
}