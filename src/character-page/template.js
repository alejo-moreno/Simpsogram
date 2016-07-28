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
        </div>
      </div>
    </div>`;
    return layout(el)
}



