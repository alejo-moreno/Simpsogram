import axios from 'axios';
import request from 'superagent';

export function loadCharacters(ctx, next) {
    request
        .get('/api/characters')
        .end(function(err, res) {
            if (err) return console.log(err);
            ctx.characters = res.body;
            next();
        })
}

export function loadCharacter(id, callback) {
    request
        .get(`/api/character/${id}`)
        .end(function(err, result) {
            if (err) callback(err);
            callback(null, result.body);
        })
}

export function loadGallery(callback) {
    request
        .get(`/api/gallery`)
        .end(function(err, result) {
            if (err) callback(err);
            callback(null, result.body);
        })
}


/**Other async options */

export function loadCharactersAxios(ctx, next) {
    axios
        .get('/api/characters')
        .then(function(res) {
            ctx.characters = res.data;
            next();
        })
        .catch(function(err) {
            console.log(err);
        })
}

export function loadCharactersFetch(ctx, next) {
    fetch('/api/characters')
        .then(function(res) {
            return res.json();
        })
        .then(function(characters) {
            ctx.characters = characters;
            next();
        })
        .catch(function(err) {
            console.log(err);
        })
}

async function asyncLoadCharacters(ctx, next) {
    try {
        ctx.characters = await fetch('/api/characters').then((res) => res.json())
        next();
    } catch (err) {
        return console.log(err);
    }
}