"use strict";
/*DOM LISTENERS*/

document.querySelector("body").addEventListener("click", function(event) {
 
 if (event.target.className === "delete") {
 	console.log("event.target.parentNode",event.target.parentNode);
    Chatty.removeMsg(event.target.parentNode);

  }
  
 if (event.target.id === "clearBtn") {
  	var listMsg = document.getElementsByClassName("listMsg");
  	while(listMsg.length > 0){
	listMsg[0].parentNode.removeChild(listMsg[0]);
	output.value = "";
	} 
  }
});

var output = document.getElementById("messageField");
output.addEventListener("keypress", function(event) {
	var key = event.which || event.keyCode;
	if (key === 13) {
		console.log("enter",event);
		Chatty.showMsg();
		output.value = "";
	}
});