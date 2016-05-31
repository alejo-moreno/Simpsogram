import yo from 'yo-yo';
import layout from '../layout';
import picture from '../picture-card';



export default function(characters) {
    var el = yo`
<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${characters.map(character => picture(character))}
      </div>
    </div>
</div>`;

    return layout(el);
}