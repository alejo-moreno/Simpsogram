import yo from 'yo-yo';
import layout from '../layout';
import picture from '../picture-card';
import translate from '../translate';
import request from 'superagent';


module.exports = function(characters) {
    var el = yo`
<div class="container timeline">
<div class="row">
  <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
    <form enctype="multipart/form-data" class="form-upload" id="formUpload" onsubmit=${onsubmit}>
       <div id="fileName" class="fileUpload btn btn-flat cyan">
       <span><i class="fa fa-camera" aria-hidden="true"></i> ${translate.message('upload-picture')}</span>
       <input name="picture" id="file" type="file" class="upload" onchange=${onchange} />
       </div>
       <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">
       ${translate.message('upload')}
       </button>
       <button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${oncancel}><i class="fa fa-times" aria-hidden="true"></i></button>

    </form>
  </div>
</div>
    <div class="row">      
        ${characters.map(character => picture(character))}      
    </div>
</div>`;

    function toggleButtons() {
        document.querySelector('#fileName').classList.toggle('hide');
        document.querySelector('#btnUpload').classList.toggle('hide');
        document.querySelector('#btnCancel').classList.toggle('hide');
    }

    function oncancel() {
        toggleButtons();
        document.getElementById('formUpload').reset();
    }
    function onchange() {
        toggleButtons();
    }
    function onsubmit(ev) {
        ev.preventDefault();
        var data = new FormData(this);
        request
            .post('/api/pictures')
            .send(data)
            .end(function(err, res) {
                if (err) console.log(err);
                console.log(res);
            })
    }

    return layout(el);
}