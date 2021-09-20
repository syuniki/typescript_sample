export {};

class VisaCard {
    constructor(public readonly owner: string) {}
}

let card = new VisaCard('しゅにき');
console.log(card.owner);
// card.owner = "hoge";