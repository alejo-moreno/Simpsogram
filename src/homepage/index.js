'use strict'
import page from 'page';
import empty from 'empty-element';
import template from './template';
import title from 'title';
import request from 'superagent';
import header from '../header';
import axios from 'axios';

page('/', header, asyncLoad, function (ctx, next) {
    title('Simpsogram')
    var main = document.getElementById('main-container');

    //ctx.characters are loaded in middleware
    empty(main).appendChild(template(ctx.characters));


})

function loadCharacters(ctx, next) {
    request
        .get('/api/characters')
        .end(function (err, res) {
            if (err) return console.log(err);
            ctx.characters = res.body;
            next();
        })
}

function loadCharactersAxios(ctx, next) {
    axios
        .get('/api/characters')
        .then(function (res) {
            ctx.characters = res.data;
            next();
        })
        .catch(function (err) {
            console.log(err);
        })
}

function loadCharactersFetch(ctx, next) {
    fetch('/api/characters')
        .then(function (res) {
            return res.json();
        })
        .then(function (characters) {
            ctx.characters = characters;
            next();
        })
        .catch(function (err) {
            console.log(err);
        })
}

async function asyncLoad(ctx, next) {
    try {
        ctx.characters = await fetch('/api/characters').then((res) => res.json())
        next();
    } catch (err) {
        return console.log(err);
    }
}