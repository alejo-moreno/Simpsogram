import layout from '../layout'
import yo from 'yo-yo';
import translate from '../translate';

export default function userPageTemplate(character) {
  var el = yo`
    <div class="container user-page">
      <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 center-align heading">
            <div class="row">
              <div class="col s12 m10 offset-m1 l3 offset-l3 center">
                <img src="${character.image.medium}" class="responsive-img circle" />
              </div>
              <div class="col s12 m10 offset-m1 l6 left-align">
                <h2 class="hide-on-large-only center-align">${character.name}</h2>
                <h2 class="hide-on-med-and-down left-align">${character.name}</h2>
              </div>
            </div>
            <div class="row">
            ${character.posts.map(post => renderPost(post, character))}
            </div>                        
        </div>
      </div>
    </div>`;
  return layout(el)
}

function renderPost(post, character) {  
  return yo`    
        <div class="col s12 m6 l4">
           <a href="/character/${character.id}/post/${post.id}" class="picture-container">
             <img src="${post.link}" class="picture" />
             <div class="likes"><i class="fa fa-heart"></i>${post.score}</div>
           </a>
           <div id="modal${post.id}" class="modal modal-fixed-footer">
              <div class="modal-content">
                 <img src="${post.link}" />
              </div>
              <div class="modal-footer">
                <div class="btn btn-flat likes">
                  <i class="fa fa-heart"></i> ${translate.message('likes', { likes: post.score })}
                </div>
              </div>
            </div>                   
        </div>`;
}

