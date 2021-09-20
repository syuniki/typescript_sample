export {};

// const echo = (arg: number): number => {
//     return arg;
// }

// const echo = (arg: string): string => {
//     return arg;
// }

const echo = <T>(arg: T): T => {
    return arg;
}

console.log(echo<number>(100));
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));


class Mirror<T, R> {
    constructor(public value: T, public str: R) {}

    echo(): T {
        return this.value;
    }
}

console.log(new Mirror<number, string>(123, 'string').echo());