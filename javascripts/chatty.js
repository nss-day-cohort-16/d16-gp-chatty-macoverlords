"use strict";
var Chatty = (function() {
    var messages = [];
    return {
        loadMessages: function(callBack) {
            $(function () {
            $.getJSON("data/messages.json", function (data) {
               messages = data;
                callBack(messages);
    });
});

        },
        getMessages: function() {
            return messages;

        }
    };
})();




