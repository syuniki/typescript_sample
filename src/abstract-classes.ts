export {};

abstract class Animal {
    abstract cry(): string;
}

class Lion extends Animal {
    cry(): string {
        return "がおー";
    }
}

class Tiger extends Animal {
    cry(): string {
        return "がぁーお";
    }
}