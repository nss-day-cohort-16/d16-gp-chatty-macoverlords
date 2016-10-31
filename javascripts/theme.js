"use strict";
var theme = document.getElementById("darkTheme");
var body =document.getElementById("body");
var textLarge = document.getElementById("largeText");
var nav = document.getElementById("nav");
var wrapper = document.getElementById("messageArea");
console.log("wrapper" , wrapper);

theme.addEventListener("click" , makeDark);
textLarge.addEventListener("click" , makeBig);

function makeDark(event){
console.log("click" , event);
    if(event.target === theme){
    	console.log("here?", wrapper , wrapper.classList)
        wrapper.classList.toggle("makeDark");
    }
};

function makeBig(event){
     if(event.target === textLarge){
     	console.log("click")
         wrapper.classList.toggle("fuh")
         
         
     }
};

