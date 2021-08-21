export {};

// objectアノテーションはobjectであればなんでも入る
let profile1: object = { name: 'しゅにき' };
profile1 = { birthYear: 1991 };
console.log({ profile1 });

// プロパティへの型指定ができる
let profile2: { name: string } = { name: "しゅにき" };
// profile2 = { birthYear: 1991 };
console.log({ profile2 });
