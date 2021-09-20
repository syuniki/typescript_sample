export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Shuya';
    static lastName: string = 'Tasaka';

    static work() {
        return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeSctipt!`;
    }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());