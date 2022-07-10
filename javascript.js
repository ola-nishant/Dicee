var random=Math.floor(Math.random()*6)+1;
var source=random+".png";
document.querySelector(".img1").setAttribute("src",source);

var random2=Math.floor(Math.random()*6)+1;
var source2=random2+".png";
document.querySelector(".img2").setAttribute("src",source2);

if(random==random2){
    document.querySelector("h1").innerHTML="It is a Draw!";
}
else if(random>random2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else{document.querySelector("h1").innerHTML="Player 2 wins!";}
