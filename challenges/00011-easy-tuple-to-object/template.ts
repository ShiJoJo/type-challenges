type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  [P in T[number]]: P
}

// T[number] number为数组下标 通过这种方式获取数组中值
// 通过string  | symbol | number 限制数组类型 剔除object



