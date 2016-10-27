'use strict';
var output = document.getElementById("messages");
var i = [];

// Press Enter
function enter(){
document.getElementById("messageField").addEventListener("keypress", function(obj) {
  if (obj.keyCode === 13) {output1();}
});
}
enter();

// Output to DOM
function output1 () {
  var textInput = document.getElementById("messageField").value;
  var element = document.createElement("li");
  element.setAttribute("class", "i" + i );
  i++;
  console.log("DOM element: ", element );
  var textnode = document.createTextNode(textInput);
  element.appendChild(textnode);
  document.getElementById("messages").appendChild(element);
  document.body.appendChild(element);
  deleteButton();
}

// Delete Button - create and append
function deleteButton() {
    var btn = document.createElement("button");
    var deleteLabel = document.createTextNode("Delete");
    btn.appendChild(deleteLabel);
    btn.setAttribute("type", "reset");
    btn.setAttribute("class", "reset" + i);
    console.log("delete btn: ", btn );
    document.body.appendChild(btn);
}
