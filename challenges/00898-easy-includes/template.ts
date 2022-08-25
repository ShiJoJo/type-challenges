import type { Equal } from '@type-challenges/utils'
export type Includes<T extends readonly any[], U> = T extends [infer F, ...infer P] ? Equal<F, U> extends true ? true : Includes<P, U> : false;
// 使用了equal 递归 infer思想