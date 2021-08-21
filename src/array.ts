export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript']; 

let nijigenHairetsu: number[][] = [
    [50, 100],
    [150, 300]
];

let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
let hairetsu2: (string | number | boolean)[] = [true, false, 'Japan'];

console.log({numbers});
console.log({strings});
console.log({numbers2});
console.log({strings2});

console.log({nijigenHairetsu});
console.log({hairetsu});
console.log({hairetsu2});
