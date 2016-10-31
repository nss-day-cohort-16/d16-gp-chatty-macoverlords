"use strict";
var theme = document.getElementById("darkTheme");
var body =document.getElementById("body");
var textLarge = document.getElementById("largeText");
var nav = document.getElementsByClassName("nav");
var wrapper = document.getElementById("messageArea");
var messages = document.getElementById("messages");
console.log("wrapper" , wrapper);

theme.addEventListener("click" , makeDark);
textLarge.addEventListener("click" , makeBig);

function makeDark(event){
console.log("click" , event);
    if(event.target === theme){
    	console.log("here?", wrapper , wrapper.classList)
        wrapper.classList.toggle("makeDark");
        nav.classList.toggle("nav2");
    }
};

function makeBig(event){
      if(event) {
         messages.classList.toggle("fuh");
         
     }
};

seizure.addEventListener("click", seizure1);
function seizure1(event) {
  if(event) {
    wrapper.classList.toggle("nick");
  }
};
