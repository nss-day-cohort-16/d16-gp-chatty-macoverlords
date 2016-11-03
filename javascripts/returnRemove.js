"use strict";
// Supressing JShint Errors
/* jshint -W097 */    // use strict within function only error
/* jshint -W079 */   //  redefintion of global variable. trips with resetting iife's

var Chatty = (oldChatty => {
  let newMessage = [],
      counter = -1;

  oldChatty.returnMsg = messages => {
    newMessage = messages.concat(newMessage);
    messages.forEach(item => {
      counter++;
      $("#messages").prepend(`<li class='listMsg'>${item}<button class='delete' id='${counter}'>Delete</button></li>`);
    });

    oldChatty.showMsg = id => {
      let userMsg = $("#messageField").val();
      newMessage.push(userMsg);
      $("#messages").append(`<li class='listMsg'>${userMsg}<button class='delete' id='${counter}'>Delete</button></li>`);
      userMsg = "";
    };

    oldChatty.returnAllMsg = () => newMessage;

  };
  return oldChatty;
})(Chatty || {});

Chatty.loadMessages(Chatty.returnMsg);