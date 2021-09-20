export {};


class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

// インターフェースは全て抽象メソッドである必要
// 複数の機能を継承(実装)できる
interface Kenja {
    ionazun(): void;
}
interface Senshi {
    kougeki(): void;
}

class Jiro implements Kenja, Senshi {
    ionazun(): void {
        console.log('イオナズン');
    };
    kougeki(): void {
        console.log('攻撃');
    };
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();