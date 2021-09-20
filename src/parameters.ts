export {};

// Parametersユーティリティ
// ある関数があった時にその関数が受け取る引数と同じ構造の型を取り扱いたい
const debugProfile = (name: string, age: number) => {
    console.log({ name, age });
}

debugProfile('Syuniki', 30);

type Profile = Parameters<typeof debugProfile>;  // type Profile = [string, number] ( タプル型: 順序にも制約がかかる )

const profile: Profile = ['Gloria', 76];

debugProfile(...profile);


type MyParameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
) => any 
    ? P
    : never;