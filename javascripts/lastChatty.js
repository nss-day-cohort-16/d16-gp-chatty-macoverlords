"use strict";

var Chatty = (function(oldChatty) {
	oldChatty.removeMsg = function(dM) { 
		dM.remove();
	var msgArray = Chatty.returnAllMsg();
	var i = 0;
		for (var item in msgArray) {
		i = Object.keys(msgArray).indexOf(item);
	// break;
		}
		msgArray.splice(i,1);
	};
		return oldChatty;
})(Chatty || {});
