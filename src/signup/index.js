'use strict'
import page from 'page';
import empty from 'empty-element';
import template from './template';
import title from 'title';
import header from '../header';

page('/signup', function (ctx, next) {
    title('Simpsogram - Signup');
    var main = document.getElementById('main-container');
    empty(main).appendChild(template);
})