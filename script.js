import $ from 'jquery';

// const btn = $('#btn');
// console.log(btn);

$(document).ready(function () {
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    });
});