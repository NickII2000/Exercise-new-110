import $ from 'jquery';

// const btn = $('#btn');
// console.log(btn);

$(document).ready(function () {
    $('.list-item:first').hover(function () {
        // $('.list-item').hover(function () {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function () {
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function () {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle',
        }, 2000);
    });
});

'use strict';

// function* generator() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generator();

// // console.log(str());
// const obj = str.next();
// console.log(`${obj.value} - ${obj.done}`);
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const counter = count(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);