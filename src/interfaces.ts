export {};

type ObjectType = { name: string, age: number };

interface ObjectInterface {
    name: string;
    age: number;
}

let object: ObjectInterface = {
    name : "しゅにき",
    age : 30,
};

console.log({object});