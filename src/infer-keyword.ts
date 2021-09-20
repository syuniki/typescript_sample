export {};

function add(a: number, b: number) {
    return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;


// infer 条件の一部としてジェネリクス型を宣言できる (infer 推論する)
type MyReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
) => infer R  // 戻り値の型をなんとか拾い上げたい
    ? R 
    : any;