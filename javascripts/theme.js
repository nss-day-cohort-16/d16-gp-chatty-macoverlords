"use strict";

let wrapper = $("#messageArea");

$("#darkTheme").click(function (){
  wrapper.toggleClass("makeDark");
});

$("#largeText").click(function (){
  $("#messages").toggleClass("fuh");
});

$("#seizure").click(function (){
  wrapper.toggleClass("nick");
});