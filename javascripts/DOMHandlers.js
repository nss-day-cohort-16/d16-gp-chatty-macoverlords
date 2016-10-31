"use strict";
/*DOM LISTENERS*/

document.body.addEventListener("click", function(event) {

    if (event.target.className === "delete") {
        var msgToDeleteId = event.target.id;
        Chatty.removeMsg(event.target.parentNode, msgToDeleteId);

    }

    if (event.target.id === "clearBtn") {
        var listMsg = document.getElementsByClassName("listMsg");
        while (listMsg.length > 0) {
            listMsg[0].parentNode.removeChild(listMsg[0]);
            output.value = "";
        }
    }
});

var output = document.getElementById("messageField");
output.addEventListener("keypress", function(event) {
    var key = event.which || event.keyCode;
    if (key === 13) {
        Chatty.showMsg();
        output.value = "";
    }
});
