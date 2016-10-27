'use strict';
function showMessage (messages) {
	messages.forEach( function(item) {
		document.getElementById("messages").innerHTML += "<li>" + item.message + "<button class='delete'>" + "Delete" + "</button></li>";
	});
}





