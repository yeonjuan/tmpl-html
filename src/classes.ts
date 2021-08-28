import {isStringLike, } from "./utils";

type Value = string | number | boolean | undefined | null;
type RecordValue = Record<string, unknown>;
type ArrayValue = Arg[];
type Arg = Value | RecordValue | ArrayValue;

const hawOwn = {}.hasOwnProperty;

export default function classes(...args: Arg[]): string {
  const classnames: string[] = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (isStringLike(arg)) {
      classnames.push(String(arg));
    } else if (Array.isArray(arg)) {
      arg && classes(arg);
    } else if (typeof arg === 'object' && !!arg) {
      for (const key in arg) {
        (arg[key] && hawOwn.call(arg, key) && classnames.push(key))
      }
    }
  }
  return `"${classnames.join(" ")}"`;
}
