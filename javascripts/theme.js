"use strict";
var theme = document.getElementById("darkTheme");
var body =document.getElementById("body");
var textLarge = document.getElementById("largeText");
var nav = document.getElementById("nav");

theme.addEventListener("click" , makeDark);
textLarge.addEventListener("click" , makeBig);

function makeDark(event){
	if ({this.getAttribute("class") == "normal")
         this.setAttribute("class", "change")
     }  else
         this.setAttribute("class", "normal");
   };

function makeBig(event){
	 if(event){
	 	body.style.fontSize="2em";
	 }
};
