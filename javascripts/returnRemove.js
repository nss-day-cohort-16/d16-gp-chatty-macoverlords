"use strict";

var Chatty = (function(oldChatty) {
    var newMessage = [];

        oldChatty.returnMsg = function(messages,id) {
        newMessage.push(messages);
        messages.forEach(function (item) { 
        id = document.getElementById("messages");
        id.innerHTML += "<li class='listMsg'>" + item + "<button class='delete'>"  + "Delete" + " </button></li>";
        });
        oldChatty.showMsg = function(userMsg,id) {
            userMsg = document.getElementById("messageField").value;
            newMessage.push(userMsg);
            id = document.getElementById("messages");
            id.innerHTML += "<li class='listMsg'>" + userMsg + "<button class='delete'>"  + "Delete" + " </button></li>";
            userMsg = "";
            console.log("newMessage",newMessage);
        };
    };
return oldChatty;
})(Chatty || {});

Chatty.loadMessages(Chatty.returnMsg);

