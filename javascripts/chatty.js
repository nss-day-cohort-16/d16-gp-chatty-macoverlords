"use strict";
// Supressing JShint Errors
/* jshint -W097 */    // use strict within function only error
/* jshint -W079 */   //  redefintion of global variable. trips with resetting iife's

var Chatty = (() => {
  let messages = [];
  return {
    getMessages: () => messages,
    loadMessages: callBack => {
      $.ajax({url: "data/messages.json"}).done(data => {
        messages = data.messages;
        callBack(messages); // passed loaded JSON data to callback function
      });}
  };
})();