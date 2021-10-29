# Домашнее задание №2
1. Объясните почему код даёт именно такие результаты?
Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в браузере со
включенными точками остановки.

//пример 1

let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2

//пример 2

d = b++;
alert(d); //ответ: 1
//пример 3
c = 2 + ++a;
alert(c); //ответ: 5

//пример 4

d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3

2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
(описать последовательность действий).

let a = 2;

let x = 1 + (a *= 2);

3. Объявить две переменные a и b и задать им целочисленные произвольные начальные
значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
6**. (Это задание не является частью курса, можете его не делать, оно для тех кому мало
обычных заданий, требует времени и возможно гугления, делайте по желанию.)
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
числа.
Подсказки, что я использовал (ваш подход может отличаться):
1) В javascript нет функции, которая возвращает последнюю цифру, но зато мы можем
получить последний символ из строки достаточно просто.
2) Я использовал String() для приведения к строке
https://codepen.io/IgorKubikov/pen/qQmoJJ?editors=0011
3) Узнать длину строки https://codepen.io/IgorKubikov/pen/vQmRbq?editors=0011
Подробнее можно почитать здесь
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
4) Чтобы получить конкретный символ в строке я использовал это
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
5) Я также использовал switch, а конкретно нам нужно будет одно действие для нескольких
case (т.е. если у нас 500 рублей, 47 рублей, 99 рублей и т.д. – у нас для нескольких цифр на
конце одно слово «рублей»). Это можно посмотреть здесь: 
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch#Methods
_for_Multi-criteria_Case
