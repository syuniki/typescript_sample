export {};

// Mojiretsuをstring型としてaliasをつける
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1: Profile = {
    name: "しゅにき",
    age: 30
};

type Profile = {
    name: string;
    age: number;
}

const example2: Profile = {
    name: "しゅにき",
    age: 30
};


// typeof でexample1のデータを用いて新しいタイプエイリアスを作成できる
type Profile2 = typeof example1;
