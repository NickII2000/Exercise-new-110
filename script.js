import $ from 'jquery';

// const btn = $('#btn');
// console.log(btn);

$(document).ready(function () {
    $('.list-item:first').hover(function () {
        // $('.list-item').hover(function () {
        $(this).toggleClass('active');
    });
});