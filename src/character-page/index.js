import page from 'page';
import header from '../header';
import title from 'title';
import empty from 'empty-element';
import template from './template';
import * as ApiClient from '../api-client';

page('/character/:id', header, function(ctx, next) {
    var main = document.getElementById('main-container');
    ApiClient.loadCharacter(ctx.params.id, function(err, character) {
        title(`Simpsogram - ${character.name}`);
        empty(main).appendChild(template(character));
    });
})