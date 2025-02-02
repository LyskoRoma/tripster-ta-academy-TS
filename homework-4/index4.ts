// Итеративный способ:
const sumToIterative = (n: number): number => {
    let sum = 0;
    for (let i = 1; i <= n; ++i) {
        sum += i;
    }
    return sum;
};

console.log(sumToIterative(100));

// Рекурсивный способ:
const sumToRecursive = (n: number): number => {
    if (n === 1) {
        return n;
    } else {
        return n + sumToRecursive(n - 1);
    }
};

console.log(sumToRecursive(100));

// Способ с использованием формулы:
const sumToFormula = (n: number): number => {
    return n * (n + 1) / 2;
};

console.log(sumToFormula(100));


// Продвинутая работа с функциями / Рекурсия и стек / Task2 - Вычислить факториал
function factorial(n: number): number {
    if (n === 1) return 1;
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));


// Продвинутая работа с функциями / Область видимости переменных, замыкание / Task1 - Учитывает ли функция последние изменения?
let nameVar: string = "John";

function sayHi(): void {
    console.log("Hi, " + nameVar);
}

nameVar = "Pete";

sayHi(); // выведет "Hi, Pete"

// Продвинутая работа с функциями / Область видимости переменных, замыкание / Task3 - Независимы ли счётчики?
function makeCounter(): () => number {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // 0
console.log( counter2() ); // 1