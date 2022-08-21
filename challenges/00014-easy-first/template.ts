// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
type First<T extends any[]> = T extends [infer P, ...infer K] ? P : never



// ts中判断一个数组为空 不是通过T["length"]===0的方式
// 而是通过 T["length"] extends 0
// 或者 直接 T extends []的方式去判断
// unino T[number]去判断
// infer 解构的方式去判断