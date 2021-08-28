import type {StringLikeType} from './types';

export function isNumeric(val: unknown): val is number {
  return typeof val === "number"
}

export function isRecord(val: unknown): val is Record<string, unknown> {
  return typeof val === "object" && !!val;
}

export function isStringLike (val: unknown): val is StringLikeType {
  return typeof val === 'string' || val === 'number';
}

export function isArray(val: unknown): val is unknown[] {
  return Object.prototype.toString.call(val) === '[object Array]';
}

export const hasOwn = {}.hasOwnProperty;
