export {};

// タプル型は配列の中身の型の順番にも制約をかけることができる
let profile: [string, number] = ["しゅにき", 30];
// profile = [30, "しゅにき"];

console.log({profile});