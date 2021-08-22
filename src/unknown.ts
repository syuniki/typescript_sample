export {};


const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// タイプガード
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 11;
    console.log({sumUnknown});
}

console.log({sumAny});