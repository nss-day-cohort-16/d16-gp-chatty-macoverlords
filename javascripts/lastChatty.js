"use strict";

var Chatty = (function(oldChatty) {
    oldChatty.removeMsg = function(dM, dMiD) {
        var msgArray = Chatty.returnAllMsg();
        var itemSpliced = msgArray.splice(dMiD, 1);
        console.log("msgArray", msgArray);
        console.log("itemSpliced", itemSpliced);
        dM.remove();

        // var i = 0;
        // for (var item in msgArray) {
        //     i = Object.keys(msgArray).indexOf(item);
        //     // console.log("i in removeMsg", i);
        //     // break;
        // }
        // msgArray.splice(i, 1);
    };
    return oldChatty;
})(Chatty || {});

