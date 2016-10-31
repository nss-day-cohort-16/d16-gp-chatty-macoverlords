"use strict";

var Chatty = (function(oldChatty) {
    var newMessage = [];

    oldChatty.returnMsg = function(messages) {
        messages.forEach(function(item) {
            var x = document.getElementById("messages");
            x.innerHTML += "<li>" + item + "<button class='delete'>Delete</button></li>";
        });

    };
    return oldChatty;
})(Chatty || {});

Chatty.loadMessages(Chatty.returnMsg);

