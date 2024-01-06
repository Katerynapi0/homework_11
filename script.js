'use strict'
//1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let result = '';
for(let i = 20; i <= 30; i += 0.5){
    result += i + ' ';
};
console.log(`1.Числа від 20 до 30 через пропуск, використовуючи крок 0,5: ${result}`);

//2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
console.log(`2. Один долар коштує 27 гривень. Вивод даних з розрахунком вартості 10, 20, 30... 100 доларів:`)
result = '';
const dollarExchange = 27;
for(let i = 10; i <= 100; i += 10){
    result = dollarExchange * i;
    console.log(`${i} доларів - ${result} гривень;`);
};

//3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
result = '';
let myNumber = 573;
for(let i = 1; i <= 100; i++){
    if( i ** 2 < myNumber){
        result += i + ' ';
    };
};
console.log(`3. Всі цілі числа від 1 до 100, квадрат яких не перевищує N(573): ${result}`);

//4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
console.log(`4. Цикл для з'ясування чи є ціле число простим:`);
let inputNumber = 200;
let primeIs = 0;
for(let i = 1; i <= inputNumber; i++){
    if(inputNumber % i === 0){
        primeIs += 1;
        if(primeIs > 2){
            break;
        };
    };
};
if(primeIs === 2){
    console.log(`Число ${inputNumber} - просте.`)
}else{
    console.log(`Число ${inputNumber} - не просте.`)
};

//5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
console.log(`5. Цикл для одержанння деякого числа шляхом зведення числа 3 у деякий ступінь:`)
const perNumb = 729;
let currentNumb = 1;

while (currentNumb < perNumb){
    currentNumb *= 3;
};

if(currentNumb === perNumb){
    console.log(`Число ${perNumb} можна одержати шляхом зведення числа 3 у ступінь.`);
}else{
    console.log(`Число ${perNumb} не можна одержати шляхом зведення числа 3 у ступінь.`);
};