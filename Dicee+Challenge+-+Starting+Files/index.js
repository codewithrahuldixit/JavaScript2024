var rand1 = Math.floor(Math.random()*6)+1;
var rand2 = Math.floor(Math.random()*6)+1;

var img1 = document.querySelectorAll('img')[0];
var img2 = document.querySelectorAll('img')[1];

img1.setAttribute("src","./images/dice"+rand1+".png");
img2.setAttribute("src","./images/dice"+rand2+".png");

if(rand1>rand2){
    document.querySelector('h1').textContent= " : ) Player 1 Wins :("
}
else if(rand2>rand1){
    document.querySelector('h1').textContent= " : ( Player 2 Wins :)"
}
else{
    document.querySelector('h1').textContent= " :) Draw :)"
}