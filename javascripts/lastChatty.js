"use strict";
// Supressing JShint errors
/* jshint -W097 */      // use strict within function only error
/* jshint -W079 */   //  redefintion of global variable. trips with resetting iife's

var Chatty = (oldChatty => {
    // take message element and id and delete message from DOM and array
    oldChatty.removeMsg = (dM, dMiD) => {
        let msgArray = Chatty.returnAllMsg(),
            itemSpliced = msgArray.splice(dMiD, 1);
        dM.remove();
    };
    return oldChatty;
})(Chatty || {});