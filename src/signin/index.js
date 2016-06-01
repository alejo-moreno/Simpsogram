'use strict'
import page from 'page';
import empty from 'empty-element';
import template from './template';
import title from 'title';

page('/signin', function (ctx, next) {
    title('Simpsogram - Signin');
    var main = document.getElementById('main-container');
    empty(main).appendChild(template);
})