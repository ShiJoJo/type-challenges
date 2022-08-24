type If<C extends boolean, T, F> = C extends true ? T : F

// 也可以在设置中改为严格模式 这样C不需要限制boolean值