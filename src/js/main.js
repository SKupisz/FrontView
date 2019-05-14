let pos1 = 0,pos2 = 0, htmlEl = "";
let mainShowing = document.querySelector(".show-boxContent");
function runIt(){
  let content =  document.querySelector(".html-area").value;
  document.querySelector(".show-boxContent").innerHTML = content;
  let css = document.querySelector(".css-area").value;
  while(css.length > 0)
  {
    pos1 = css.indexOf("{");
    pos2 = css.indexOf("}");
    htmlEl = css.substring(0,pos1);
    htmlEl.trim();
    let elementsToCss = mainShowing.querySelectorAll(htmlEl);
    for(let i = 0 ; i < elementsToCss.length; i++)
    {
      elementsToCss[i].style = css.substring(pos1+1,pos2);
    }
    css = css.substring(pos2+1,css.length);
    css.trim();
  }
}
