// Типы данных / числа / Task 2 Почему 6.35.toFixed(1) == 6.3? || Как правильно округлить 6.35?
let x: number = 6.35;
console.log(Math.round(x * 10) / 10)


// Типы данных / числа / Task 5 Случайное число от min до max
const randomFun = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
}
console.log(randomFun(5, 12));

// Типы данных / числа / Task 6 - Случайное целое число от min до max
const randomInteger = (min: number, max: number): number => {
    let randNumb = min + Math.random() * (max - min);
    return Math.floor(randNumb);
}
console.log(randomInteger(1, 5));

// Типы данных / строки / Task 1 - Сделать первый символ заглавным
const ucFirst = (str: string): string => {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(ucFirst('ataman'));

// Типы данных / строки / Task 2 - Проверка на спам
const checkSpam = (str: string): boolean => {
    let resultStr = str.toLowerCase();
    return resultStr.includes("viagra") || resultStr.includes("xxx");
}

// Типы данных / строки / Task 3 - усечение строки
const truncate = (str: string, maxlength: number): string => {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength - 1) + '…';
        return str;
    } else {
        return str;
    }
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// Типы данных / строки / Task 4 - Выделить число
function extractCurrencyValue(str: string): number {
    return +str.slice(1);
}
console.log(extractCurrencyValue("$1222"));

// Типы данных / Массивы / Task 2 - Операции с массивами
let styles: string[] = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
styles.shift();
styles.unshift('Рэп', 'Регги')
console.log(styles);

// Типы данных / Массивы / Task 5 - Подмассив наибольшей суммы
let arr: number[] = [1, 2, -3, 4, -9, 6];

function getMaxSubSum(arr: number[]): number {
    let sum = 0;
    let totalSum = 0;
    for (let item of arr) {
        sum += item;
        totalSum = Math.max(totalSum, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return totalSum;
}
console.log(getMaxSubSum(arr));

// Типы данных / Методы массивов / Task 1 - Переведите текст вида border-left-width в borderLeftWidth
let str: string = 'my-short-string';
const camelize = (str: string): string => {
    return str.split('-').map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
}
console.log(camelize(str));

// Типы данных / Методы массивов / Task 2 - Фильтрация по диапазону
let arr2: number[] = [1, 3, 7, 8, 9, 10];
let a: number = 2, b: number = 8;
const filterRange = (arr: number[], a: number, b: number): number[] => {
    return arr.filter((item) => (item >= a && item <= b) ? true : false);
}
console.log(filterRange(arr2, a, b));

// Типы данных / Методы массивов / Task 4 - сортировка в порядке по убыванию
let arr3: number[] = [5, 2, 1, -10, 8];
arr3.sort((a, b) => b - a);
console.log(arr3);

// Типы данных / Методы массивов / Task 7 - Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let resultNames = users.map((item) => item.name);

console.log(resultNames);

// Типы данных / Методы массивов / Task 8 - Трансформировать в объекты
let vasyaObj = { name: "Вася", surname: "Пупкин", id: 1 };
let petyaObj = { name: "Петя", surname: "Иванов", id: 2 };
let mashaObj = { name: "Маша", surname: "Петрова", id: 3 };

let usersObj = [vasyaObj, petyaObj, mashaObj];

let usersMapped = usersObj.map(items => ({
    fullName: `${items.name} ${items.surname}`,
    id: items.id,
}));
console.log(usersMapped);

// Типы данных / Object.keys, values, entries / Task 1 - Сумма свойств объекта
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
const sumSalaries = (salaries: { [key: string]: number }): number => {
    let totalSum = 0;
    let preResult = Object.values(salaries);
    for (let item of preResult) {
        totalSum += item;
    }
    return totalSum;
}
console.log(sumSalaries(salaries));

// Типы данных / Object.keys, values, entries / Task 2 - Подсчёт количества свойств объекта
let user = {
    name: 'John',
    age: 30,
    gender: 'male',
};
const countObj = (user: object): number => Object.values(user).length;
console.log(countObj(user));