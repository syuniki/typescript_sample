export {};

function bmi(height: number, weight:number): number {
    return weight / (height * height);
}

console.log(bmi(1.61, 65.6));