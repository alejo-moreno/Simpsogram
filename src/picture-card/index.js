import yo from 'yo-yo';
import translate from '../translate';


export default function pictureCard(subject) {

    var el;

    function render(subject) {
        return yo`<div class="card ${subject.liked ? 'liked' : ''}">
        <div class="card-image">
            <img class="activator" src="${subject.character.image.medium}">
        </div>
        <div class="card-content">
            <a href="/character/${subject.character.id}" class="card-title">
                <img src="${subject.person.image.medium}" class="avatar" />
                <span class="username">${subject.character.name}</span>                
            </a>
                        
            <small class="right time">${translate.date.format(subject.createdAt)} </small>
            <p>
               <a class="left" href="#" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
               <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
               <span class="left likes">${translate.message('likes', { likes: subject.likes })}  </span>
            </p>
        </div>
    </div>`;
    }

    function like(liked) {
        subject.liked = liked;
        subject.likes += liked ? 1 : -1;
        var newEl = render(subject);
        yo.update(el, newEl)
        return false;
    }

    el = render(subject);
    return el;

}