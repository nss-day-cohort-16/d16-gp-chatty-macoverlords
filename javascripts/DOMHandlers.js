"use strict";
// Supressing JShint errors
/* jshint -W097 */      // use strict within function only error


$("body").click( event => {

  if (event.target.className === "delete") {
    var msgToDeleteId = event.target.id;
    Chatty.removeMsg(event.target.parentNode, msgToDeleteId);

  }

  if (event.target.id === "clearBtn") {
    while ($(".listMsg").length > 0) {
      $(".listMsg")[0].parentNode.removeChild($(".listMsg")[0]);
      output.value = "";
    }
  }
});

$("#messageField").keypress( event => {
  var key = event.which || event.keyCode;
  if (key === 13) {
    Chatty.showMsg();
    output.value = "";
  }

});