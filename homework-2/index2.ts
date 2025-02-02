/*
// Объекты: основы / Объекты / task 1 - Привет, object
interface User {
    name?: string;
    surname?: string;
}

let user: User = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

// Объекты: основы / Объекты / task 2 - Проверка на пустоту
let obj: Record<string, unknown> = {};

const isEmpty = (obj: Record<string, unknown>): boolean => {
    if (Object.keys(obj).length === 0) {
        return true;
    }
    return false;
}
console.log(isEmpty(obj));

// Объекты: основы / Объекты / task 3 - Объекты-константы?
const user1 = {
    name: "John"
};
// это будет работать? Да, const защищает от изменений только саму переменную user, а не её содержимое
user.name = "Pete";

// Объекты: основы / Объекты / task 4 - Сумма свойств объекта
interface Salary {
    John: number;
    Ann: number;
    Pete: number;
}

let salaries: Salary = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const totalSum = (salaries: Salary): number => {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key as keyof Salary];
    }
    return sum
}
console.log(totalSum(salaries));

*/

// Объекты: основы / Объекты / task 4 - Умножаем все числовые свойства на 2

interface Menu {
    width: number;
    height: number;
    title: string;
}

let menu: Menu = {
    width: 200,
    height: 300,
    title: 'My menu',
}

const multiplyNumeric = (menu: Menu): void => {
    for (let key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] = 2 * menu[key];
        }
    }
}
multiplyNumeric(menu);
console.log(menu)