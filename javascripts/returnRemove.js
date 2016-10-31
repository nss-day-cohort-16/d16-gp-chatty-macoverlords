"use strict";

var Chatty = (function(oldChatty) {
    var newMessage = [];
    var counter = -1;

    oldChatty.returnMsg = function(messages, id) {
        console.log("messages", messages);
        newMessage = messages.concat(newMessage);
        messages.forEach(function(item){
            console.log("counter1 in returnMsg", counter);
            counter++;
            console.log("counter2 in returnMsg", counter);
            var id = document.getElementById("messages");
            
            var deleteBtn = `<button class='delete' id='${counter}'>Delete</button>`;
            id.innerHTML += "<li class='listMsg'>" + item + deleteBtn + "</li>";
        });
        oldChatty.showMsg = function(userMsg, id) {
            
            
            console.log("counter1 in showMsg", counter);
            newMessage.push(userMsg);
            counter++;
            console.log("counter2 in showMsg", counter)
            id.innerHTML += `<li class='listMsg'>${userMsg}<button class='delete' id='${counter}'>Delete</button></li>`;
            // userMsg = "";
            console.log("newMessage in showMsg", newMessage);
        };
        oldChatty.returnAllMsg = function() {
            console.log("newMessage in returnAll", newMessage);
            return newMessage;
        };
    };
    return oldChatty;
})(Chatty || {});

Chatty.loadMessages(Chatty.returnMsg);
