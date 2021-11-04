/*
1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
объект-прототип (как объект transport в уроке).
*/

//es6
'use strict';
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    make25PercentDiscount() {
        this.price = (this.price * 0.75).toFixed()
    }
}



// Проверка
const product_1 = new Product('Mac', 100000)  // инициализация объекта
console.log(product_1.price)  // до применения скидки
product_1.make25PercentDiscount()  // выполненние метода
console.log(product_1.price)  // после применения скидки


