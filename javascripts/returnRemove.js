"use strict";

var Chatty = (function(oldChatty) {
    var newMessage = [];
    var counter = -1;

    oldChatty.returnMsg = function(messages, id) {
        newMessage = messages.concat(newMessage);
        messages.forEach(function(item) {
            counter++
            id = document.getElementById("messages");
            var deleteBtn = `<button class='delete' id='${counter}'>Delete</button>`;
            id.innerHTML += "<li class='listMsg'>" + item + deleteBtn + "</li>";
        });
        oldChatty.showMsg = function(userMsg, id) {
            userMsg = document.getElementById("messageField").value;
            newMessage.push(userMsg);
            id = document.getElementById("messages");
            id.innerHTML += `<li class='listMsg'>${userMsg}<button class='delete' id='${counter}'>Delete</button></li>`;
            userMsg = "";
            console.log("newMessage", newMessage);
        };
        oldChatty.returnAllMsg = function() {
            console.log("newMessage in returnAll", newMessage);
            return newMessage;
        };
    };
    return oldChatty;
})(Chatty || {});

Chatty.loadMessages(Chatty.returnMsg);
