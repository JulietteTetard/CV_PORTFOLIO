

//function toggle_text(id) {
 //   let span = document.getElementById(id);
  //  if(span.style.display === "none") {
 //       span.style.display = "inline";
 //   } else {
 //       span.style.display = "none";
 //   }
//}
// onclick="toggle_text('span_txt3');"


//sur le clique du lien études, le span correspondant s'affiche, tandis que les autres restent masqués
document.getElementById("etudes").onclick = function () {
    document.getElementById("span_txt1").style.display = "inline";
    document.getElementById("span_txt2").style.display = "none";
    document.getElementById("span_txt3").style.display = "none";

};


//sur le clique du lien exp, le span correspondant s'affiche, tandis que les autres restent masqués
document.getElementById("exp").onclick = function () {
    document.getElementById("span_txt1").style.display = "none";
    document.getElementById("span_txt2").style.display = "inline";
    document.getElementById("span_txt3").style.display = "none";

};

//sur le clique du lien comp, le span correspondant s'affiche, tandis que les autres restent masqués
document.getElementById("comp").onclick = function () {
    document.getElementById("span_txt1").style.display = "none";
    document.getElementById("span_txt2").style.display = "none";
    document.getElementById("span_txt3").style.display = "inline";

};
