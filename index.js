var rn1=Math.ceil(6*Math.random());
var imgsrc="dice"+rn1+".png";
document.querySelectorAll("img")[0].setAttribute("src", imgsrc);

var rn2=Math.ceil(6*Math.random());
var imgsrc="dice"+rn2+".png";
document.querySelectorAll("img")[1].setAttribute("src", imgsrc);

if(rn1>rn2)
    document.querySelector("h1").innerHTML="Player 1 wins";
else if(rn1<rn2)
    document.querySelector("h1").innerHTML="Player 2 wins";
else
    document.querySelector("h1").innerHTML="Draw";

