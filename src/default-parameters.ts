export {}; 

const nextYearSalary = (currentSalary: number, rate: number = 1.1): string => {
    return currentSalary * rate + '万円';
}

// console.log(nextYearSalary(1000, 1.05));
console.log(nextYearSalary(1000));