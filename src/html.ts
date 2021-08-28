import {isNumeric} from './utils';
import convert from './convert';
import type {StringLikeType} from './types';

export default function html(
  strings: TemplateStringsArray,
  ...args: unknown[]
) {
  if (!args || args.length <= 0) {
    return strings.join("");
  }
  const result: StringLikeType[] = [];
  for (let i = 0; i < strings.length; i++) {
    result.push(strings[i]);
    const arg = args[i] || isNumeric(args[i]) ? (args[i] as string) : "";
    arg && result.push(convert(arg));
  }
  return result.join("");
}
