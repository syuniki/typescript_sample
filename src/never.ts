export {};

// 呼びもとに戻ってこない関数のアノテーション :never
function error(message: string): never {
    throw new Error(message);
}

try {
    let result = error('SampleError');
    console.log({ result });
} catch(error) {
    console.log({error});
}



// voidは戻り値として帰ってくる, neverは戻ってこないのでエラーなどで用いる
let foo: void = undefined;
let bar: never = error('only me');