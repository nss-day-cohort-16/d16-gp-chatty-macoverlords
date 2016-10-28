var Chatty = (function(oldChatty) {
		oldChatty.removeMsg = function(dM) { 
            dM.remove();
        console.log("newMessage", Chatty.getMessages());
        };
	return oldChatty;
})(Chatty || {});