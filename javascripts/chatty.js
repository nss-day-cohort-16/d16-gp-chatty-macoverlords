'use strict';
var Chatty = (function () {
	var messages = [];
	return {
		loadMessages: function(callBack) {
			console.log("loadMessages running");
			var loader = new XMLHttpRequest();
			loader.addEventListener("load", function () {
				messages = JSON.parse(this.responseText).messages;
				callBack(messages);
			});
			loader.open("GET", "data/messages.json");
			loader.send();
		}
	};
})(Chatty || {});
