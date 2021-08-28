import {hasOwn} from './utils';

type Value = string | number | boolean | undefined | null;
type RecordValue = Record<string, Value>;

export default function styles(...args: RecordValue[]): string {
  const styleMap: any = {};
  const style: string[] = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (typeof arg === 'object' && !!arg) {
      for (const key in arg) {
        if (arg[key] && hasOwn.call(arg, key)) {
          styleMap[key] = arg[key];
        }
      }
    }
  }

  for (const key in styleMap) {
    if (key && styleMap[key] && hasOwn.call(styleMap, key)) {
      style.push(`${key}:${styleMap[key]}`);
    }
  }

  return `"${style.join(';')}"`;
}
