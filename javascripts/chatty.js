"use strict";
var Chatty = (function() {
    var messages = [];
    return {
        loadMessages: function(callBack) {
            var loader = new XMLHttpRequest();
            loader.open("GET", "data/messages.json");
            loader.send();
            loader.addEventListener("load", function() {
                messages = JSON.parse(this.responseText).messages;
                callBack(messages);
            });
        },
        getMessages: function() {
            console.log("messages", messages);
            return messages;

        }
    };
})();

