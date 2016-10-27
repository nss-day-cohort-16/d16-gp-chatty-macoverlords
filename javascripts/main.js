'use strict';


var Chatty = (function(oldChatty) {
	var newMessage = [];

	return {
		returnMsg: function(messages) {
			messages.forEach(function (item) { 
			document.getElementById("messages").innerHTML += "<li>" + item.message + "<button class='delete'>" + "Delete" + "</button></li>";
			});
		}	
	
	};

})(Chatty || {});

// Chatty.loadMessages(returnMsg);

console.log(Chatty);