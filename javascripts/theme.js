"use strict";

var theme = document.getElementById("darkTheme");
var body =document.getElementById("body");
var textLarge = document.getElementById("largeText");
var seizure = document.getElementById("seizure");
var nav = document.getElementById("nav");
var wrapper = document.getElementById("messageArea");
var messages = document.getElementById("messages");
console.log("wrapper" , wrapper);

theme.addEventListener("click" , makeDark);
textLarge.addEventListener("click" , makeBig);

function makeDark(event){
console.log("click" , event);
    if(event.target === theme){
    	console.log("here?", wrapper , wrapper.classList);
        wrapper.classList.toggle("makeDark");
    }
}

function makeBig(event){
     // if(event.target === textLarge){
      if(event) {
     	// console.log("click")
         messages.classList.toggle("fuh");
     }
}

seizure.addEventListener("click", seizure1);
function seizure1(event) {
  if(event) {
    wrapper.classList.toggle("nick");
  }
}
