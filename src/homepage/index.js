'use strict'
import page from 'page';
import empty from 'empty-element';
import template from './template';
import title from 'title';
import header from '../header';
import * as ApiClient from '../api-client';

page('/', header, ApiClient.loadCharactersAxios, function(ctx, next) {
    title('Simpsogram')
    var main = document.getElementById('main-container');
    //ctx.characters are loaded in middleware
    empty(main).appendChild(template(ctx.characters));
})

