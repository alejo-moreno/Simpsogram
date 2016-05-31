'use strict'
import page from 'page';
import empty from 'empty-element';
import template from './template';
import title from 'title';


page('/', function(ctx, next) {
    title('Simpsogram')
    var main = document.getElementById('main-container');

    $.getJSON('http://api.tvmaze.com/shows/83/cast', function(result) {
        var characters = result.map(data => {
            data.character.likes = 100;
            data.character.createdAt = new Date().setDate(new Date().getDate() - 10);
            return data.character;
        })
        empty(main).appendChild(template(characters));
    });


})
