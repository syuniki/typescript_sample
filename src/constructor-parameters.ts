export {};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let taro = new Person('Taro', 13);
console.log({ taro });

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;  // type Profile = [string, number]

const profile: Profile = ['Syuniki', 30];
const me = new Person(...profile);
console.log({ me });


type MyConstructorParameters<
    T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;


class Not {}
type not = ConstructorParameters<typeof Not>;