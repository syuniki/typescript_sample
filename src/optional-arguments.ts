export {};


let bmi = (
    height: number,
    weight:number,
    printable?: boolean
): number => {
    const bmi: number = weight / (height * height);
    if (printable) {
        console.log({ bmi });
    }
    return bmi;
};

bmi(1.61, 59.2, true);


// bmi(身長, 体重, console.logで出力するかどうか?)
// 第3引数 true => 出力, false・入力なし => 出力なし

