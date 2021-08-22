export {};

// シーケンシャルな番号が勝手についている
enum Months {
    // 先頭の番号を設定するだけであとの番号はインクリメントされていく
    January = 1,
    Feburary,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log( Months.January );
console.log( Months.Feburary );
console.log( Months.December );


enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    // YELLOW = '#FFFF00',
    BLACK = '#000000',
}

console.log(COLORS.GREEN);

// 途中から追加できる
enum COLORS {
    YELLOW = '#FFFF00',
}
console.log({ COLORS });
console.log(COLORS.YELLOW);