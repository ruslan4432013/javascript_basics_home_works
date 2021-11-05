/*
1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.
*/

//es5
'use strict';
function Post(author, text, date) {
    this.author = author
    this.text = text
    this.date = date
}

Post.prototype.edit = function (text) {
    this.text = text
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date)
    this.highlighted = false
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true
}



// Проверка  части а
console.log('Часть а')
const post_1 = new Post('User', '', '01.01.2021')  // инициализация объекта
console.log(post_1.text)  // до вызова метода
post_1.edit('new text')  // выполненние метода
console.log(post_1.text)  // после вызова метода

// Проверка части б
console.log('Часть б')
const post_2 = new AttachedPost('Admin', '', '01.01.2011')  // инициализация объекта
console.log(post_2.text)  // до вызова родительского метода
post_2.edit('new text in post_2')  // выполненние родительского метода
console.log(post_2.text)  // после вызова родительского метода
console.log(post_2.highlighted)  // до вызова собственного метода
post_2.makeTextHighlighted()  // выполненние собственного метода
console.log(post_2.highlighted)  // после вызова собственного метода



