"use strict";
/* jshint -W079 */

var Chatty = (function(oldChatty) {
    oldChatty.removeMsg = function(dM, dMiD) {
        var msgArray = Chatty.returnAllMsg();
        var itemSpliced = msgArray.splice(dMiD, 1);
        console.log("msgArray", msgArray);
        console.log("itemSpliced", itemSpliced);
        dM.remove();
    };
    return oldChatty;
})(Chatty || {});

