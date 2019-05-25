String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
let pos1 = 0,pos2 = 0, htmlEl = "";
let mainShowing = document.querySelector(".show-boxContent");
function runIt(){
  document.querySelector(".show-boxContent").innerHTML = "";
  let content =  document.querySelector(".html-area").value;
  document.querySelector(".show-boxContent").innerHTML = content;
  let css = document.querySelector(".css-area").value;
  css.trim();
  while(css.length > 0)
  {
    pos1 = css.indexOf("{");
    pos2 = css.indexOf("}");
    htmlEl = css.substring(0,pos1);
    htmlEl.trim();
    if(htmlEl == "*")
    {
      let elementsToCss = mainShowing.childNodes;
      let cssRows = css.substring(pos1+1,pos2);
      cssRows = cssRows.split("\n");
      let finalCss = "";
      for(let i = 0 ; i < cssRows.length; i++)
      {
        finalCss+=cssRows[i];
        finalCss+=" ";
      }

      for(let i = 0 ; i < elementsToCss.length; i++)
      {
        for(let j = 0 ; j < cssRows.length; j++)
        {
          let forNow = cssRows[j].split(":");
          if(forNow.length == 2)
          {
            elementsToCss[i].style[forNow[0]] = forNow[1].substring(0,forNow[1].length-1);
          }
        }
      }
    }
    else if(htmlEl.indexOf("@media") != -1)
    {
      if(!(htmlEl.indexOf("(") != -1 && htmlEl.indexOf(")") != -1))
      {

      }
    }
    else {
      let elementsToCss = mainShowing.querySelectorAll(htmlEl);
      let cssRows = css.substring(pos1+1,pos2);
      cssRows = cssRows.split("\n");
      let finalCss = "";
      for(let i = 0 ; i < cssRows.length; i++)
      {
        finalCss+=cssRows[i];
        finalCss+=" ";
      }

      for(let i = 0 ; i < elementsToCss.length; i++)
      {
        for(let j = 0 ; j < cssRows.length; j++)
        {
          let forNow = cssRows[j].split(":");
          if(forNow.length == 2)
          {
            elementsToCss[i].style[forNow[0]] = forNow[1].substring(0,forNow[1].length-1);
          }
        }
      }
    }
    css = css.substring(pos2+1,css.length);
    css.trim();

  }
}
function coloringHTML(){

}
