"use strict";

var Chatty = (function(oldChatty) {
    oldChatty.removeMsg = function(dM, dMiD) {
        var msgArray = Chatty.returnAllMsg();
        var itemSpliced = msgArray.splice(dMiD, 1);
        dM.remove();
    };
    return oldChatty;
})(Chatty || {});

