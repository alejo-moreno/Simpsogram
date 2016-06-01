import yo from 'yo-yo';


function layout(content) {
  return yo`
    <div class="content">    
       ${content}
    </div>`
}
export default layout;
