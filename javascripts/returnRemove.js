"use strict";

var Chatty = (function(oldChatty) {
    var newMessage = [];

        oldChatty.returnMsg = function(messages,id) {
        newMessage = messages.concat(newMessage);
        console.log("newMessage", newMessage);
        messages.forEach(function (item) { 
            id = document.getElementById("messages");
            var deleteBtn = "<button class='delete'>Delete</button>";
        id.innerHTML += "<li class='listMsg'>" + item + deleteBtn + "</li>";
        });
        oldChatty.showMsg = function(userMsg,id) {
            userMsg = document.getElementById("messageField").value;
            newMessage.push(userMsg);
            id = document.getElementById("messages");
            id.innerHTML += "<li class='listMsg'>" + userMsg + "<button class='delete'>"  + "Delete" + " </button></li>";
            userMsg = "";
            console.log("newMessage",newMessage);
        };
        oldChatty.returnAllMsg = function () {
            return newMessage;
        };
    };
return oldChatty;
})(Chatty || {});

Chatty.loadMessages(Chatty.returnMsg);


