import {isStringLike, isArray} from './utils';
import type {StringLikeType} from './types';

type Value = string | number | boolean | undefined | null;

export default function convert(val: Value | Value[], prev?: string): StringLikeType {
  if (isStringLike(val)) return val;
  if (isArray(val)) {
    const result: StringLikeType[] = [];
    for (let i = 0; i < val.length; i++) {
      const cur = val[i];
      result.push(convert(cur, prev))
    }
    return result.join('');
  }
  return '';
}
