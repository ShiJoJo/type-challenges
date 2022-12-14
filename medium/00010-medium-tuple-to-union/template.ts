// type TupleToUnion<T extends any[]> = T[number];
type TupleToUnion<T extends any[]> = T extends [infer A, ...infer B] ? TupleToUnion<B> | A : never;
