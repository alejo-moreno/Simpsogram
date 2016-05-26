'use strict'
import page from 'page';
import $ from 'jquery';

let $main = $('#main-container')


page('/', function (ctx, next) {
    $main.html('Home <a href="/signup">Signup</a>')
})

page('/signup', function (ctx, next) {
    $main.html('Signup <a href="/">Home</a>')
})

page();