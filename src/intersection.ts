export {};

type Pitcher1 = {
    throwingSpeed: number;
};

type Batter1 = {
    battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
    throwingSpeed: 154,
};
const OchiaiHiromitsu: Batter1 = {
    battingAverage: 0.367,
};

// 打って投げられる選手を作りたい!!
// type TwoWayPlayer = {
//     throwingSpeed: number;
//     battingAverage: number;
// };
// 2つのaliasで作った型を組み合わせて作ることができる
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.286,
}
console.log({OtaniShouhei});
