let initFontSize = function(){
  let html = document.getElementsByTagName("html")[0];
  let clientWidth = document.documentElement.clientWidth;
  if(clientWidth > 750){
      html.style.fontSize = "100px";
  }else{
      html.style.fontSize = clientWidth / 750 * 100 + "px";
  }
}
initFontSize();
window.onresize = function(){
  initFontSize();
}