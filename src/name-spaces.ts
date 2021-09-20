export {};

namespace Japanese {
    export namespace Tokyo { // export をつけることで外の空間からアクセスできる
        export class Person {  // export をつけることで外の空間からアクセスできる
            constructor(public name: string){}
        }
    }
    export namespace Osaka {
        export class Person {
            constructor(public name: string){}
        }
    }
}

namespace English{
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) {}
    }
}

const me = new Japanese.Tokyo.Person('しゅにき');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('しゅにやん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);


