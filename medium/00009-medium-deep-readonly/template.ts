
type DeepReadonly<T extends {}> = {
    readonly [P in keyof T]: T[P] extends { [K: string]: {} } | any[] ? DeepReadonly<T[P]> : T[P]
}

// 初步