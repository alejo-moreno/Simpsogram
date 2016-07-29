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
        ApiClient.loadGallery(function(err, gallery) {
            if (err) return console.log(err);
            var posts = gallery.data.sort(g => 0.5 - Math.random()).slice(0, 15);
            character.posts = posts;
            empty(main).appendChild(template(character));
        });
    });
})