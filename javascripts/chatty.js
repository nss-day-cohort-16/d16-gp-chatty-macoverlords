"use strict";
// Supressing JShint errors
/* jshint -W097 */    // use strict within function only error
/* jshint -W079 */   //  redefintion of global variable. trips with loose augementation iife's

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