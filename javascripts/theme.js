"use strict";
var theme = document.getElementById("darkTheme");
var body =document.getElementById("body");
var textLarge = document.getElementById("largeText");
var nav = document.getElementById("nav");

theme.addEventListener("click" , makeDark);
textLarge.addEventListener("click" , makeBig);

function makeDark(event){

    if(event){
        body.classList.toggle("foo")
    }
};

function makeBig(event){
     if(event){
         body.classList.toggle("fuh")
     }
};

