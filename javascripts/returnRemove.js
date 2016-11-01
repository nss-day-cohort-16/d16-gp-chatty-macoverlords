"use strict";

var Chatty = (function(oldChatty) {
    var newMessage = [];
    var counter = -1;

    oldChatty.returnMsg = function(messages) {
       
                $.each(messages.messages,function(index, item) {
                console.log(item);
                Chatty.showMsg(item);
                 });
        };
        
        oldChatty.showMsg = function(newMsg) {
         
            counter++; 
            newMessage.push(newMsg);
             $("#messages").append(`<li class='listMsg'>${newMsg}<button class='delete' id='${counter}'>Delete</button></li>`);
    };

        oldChatty.returnAllMsg = function() {
            return newMessage;
        };

    return oldChatty;
})(Chatty || {});

Chatty.loadMessages(Chatty.returnMsg);
