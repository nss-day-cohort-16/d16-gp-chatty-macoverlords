"use strict";
var theme = document.getElementById("darkTheme");
var body =document.getElementById("body");
var textLarge = document.getElementById("largeText");
var nav = document.getElementById("nav");

theme.addEventListener("click" , makeDark);
textLarge.addEventListener("click" , makeBig);

function makeDark(event){
	if(event){
		body.style.backgroundColor="dimgrey";
		nav.style.backgroundColor="black";
		nav.style.color="white";
	}
	else if(event){
		body.style.backgroundColor="white";
		nav.style.backgroundColor="white";
		nav.style.color="black";
	}	
}

function makeBig(event){
	 if(event){
	 	body.style.fontSize="2em";
	 }
};
