"use strict";

var Chatty = (function(oldChatty) {
    var newMessage = [];

            oldChatty.returnMsg = function(messages) {
            console.log("messages",messages);
            messages.forEach(function (item) { 
            console.log("item",item );
            var x = document.getElementById("messages");
            x.innerHTML += "<li>" + item + "<button class='delete'>Delete</button></li>";
            });

    };
    return oldChatty;
})(Chatty || {});

Chatty.loadMessages(Chatty.returnMsg);

console.log("secondChatt",Chatty);





