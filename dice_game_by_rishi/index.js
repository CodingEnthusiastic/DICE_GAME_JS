var randomnumber1 = (Math.floor(Math.random()*6)+1);
var randomnumber2 = (Math.floor(Math.random()*6)+1);


//EXTRA METHOD FROM STACK OVERFLOW ( if the location names is not in any pattern use this )
/*var imagesArr = new Array(6); //initialise array
imagesArr[0] = new Image(); //store images url
imagesArr[0].src = "./images/dice1.png";
imagesArr [1]= new Image();
imagesArr[1].src = "./images/dice2.png";
imagesArr [2]= new Image();
imagesArr[2].src = "./images/dice3.png";
imagesArr [3]= new Image();
imagesArr[3].src = "./images/dice4.png";
imagesArr [4]= new Image();
imagesArr[4].src = "./images/dice5.png";
imagesArr[5] = new Image();
imagesArr[5].src = "./images/dice6.png";*/


var selected1 = "./images/dice"+randomnumber1+".png";
document.querySelector(".img1").setAttribute("src",selected1);

var selected2 = "./images/dice"+randomnumber2+".png";
document.querySelector(".img2").setAttribute("src",selected2);

if(randomnumber1===randomnumber2)
{
    document.querySelector("h1").textContent = "It is a draw";
}
else if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").textContent = "Player 1 wins";
}
else
{
    document.querySelector("h1").textContent = "Player 2 wins";
}
