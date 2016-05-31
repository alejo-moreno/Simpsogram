import yo from 'yo-yo';
import translate from '../translate';


export default function pictureCard(character) {

    var el;

    function render(character) {
        return yo`<div class="card ${character.liked ? 'liked' : ''}">
        <div class="card-image">
            <img class="activator" src="http://materializecss.com/images/office.jpg">
        </div>
        <div class="card-content">
            <a href="/user/${character.name}" class="card-title">
                <img src="${character.image.medium}" class="avatar" />
                <span class="username">${character.name}</span>
            </a>            
            <small class="right time">${translate.date.format(character.createdAt)} </small>
            <p>
               <a class="left" href="#" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
               <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
               <span class="left likes">${translate.message('likes', { likes: character.likes })}  </span>
            </p>
        </div>
    </div>`;
    }

    function like(liked) {
        character.liked = liked;
        character.likes += liked ? 1 : -1;
        var newEl = render(character);
        yo.update(el, newEl)
        return false;
    }

    el = render(character);
    return el;

}