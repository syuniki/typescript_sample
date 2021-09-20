export {};

type Profile = {
    name: string,
    age?: number,
    zipCode: number,
};

// 全ての型をオプショナルなプロパティにできる
type PartialType = Partial<Profile>;
// 全ての型を必須のプロパティにできる
type RequiredType = Required<Profile>;