// Класс / Класс базовый синтаксис / Task 1 - Перепишите класс
class Clock {
    private timer?: ReturnType<typeof setInterval>
    private template: string

    constructor({ template }: { template: string }) {
        this.template = template
    }

    render(): void {
        const date = new Date()

        const hours: string =
            date.getHours() < 10 ? '0' + date.getHours() : String(date.getHours())
        const mins: string =
            date.getMinutes() < 10 ? '0' + date.getMinutes() : String(date.getMinutes())
        const secs: string =
            date.getSeconds() < 10 ? '0' + date.getSeconds() : String(date.getSeconds())

        const output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)

        console.log(output)
    }

    stop(): void {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    start(): void {
        this.render()
        this.timer = setInterval(() => this.render(), 1000)
    }
}

const clock = new Clock({ template: 'h:m:s' })
clock.start()

// Класс / Наследование классов / Task 1 - Ошибка создания экземпляра класса
class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

class Rabbit extends Animal {
    created: number
    constructor(name: string) {
        super(name)
        this.created = Date.now()
    }
}

const rabbit = new Rabbit("Белый кролик") // ошибок нет

// Класс / Статические свойства и методы / Task 1 - Класс расширяет объект?
class RabbitExtendsObject extends Object {
    name: string
    constructor(name: string) {
        super() // Обязательный вызов конструктора родительского класса Object
        this.name = name
    }
}

const rabbit2 = new RabbitExtendsObject("Кроль")