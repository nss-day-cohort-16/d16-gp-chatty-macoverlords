var Chatty = (function(oldChatty) {
		oldChatty.removeMsg = function(dM) { 
		var msgArray = Chatty.returnAllMsg();
            var string = dM.textContent;
            console.log("string", string);

            dM.remove();
            
            console.log("dm", dM);
            // console.log("msgArray", msgArray);
            // msgArray.forEach(function(item, i) {
            // console.log("item",item);
            // 	if (item == item) {
            		// var x = msgArray.indexOf(item,i);
            		// console.log(x);
            		// msgArray.splice(i,1);
        

            // 	}
            // });
  //        var i = 0;
  //        for (var item in msgArray) {
  //     		i++;
  //     x = Object.keys(msgArray).indexOf(item);
  //   console.log("msgArray",msgArray);
  //   console.log("item", item);
  //   console.log("i",x);
    
  //   break;
		// }
  //   msgArray.splice(i,1);


            console.log("msgArray",msgArray);
        console.log("newMessage", Chatty.returnAllMsg());
		// newMessage.splice(newMessage.indexOf(dM), 1 );
		// console.log("newMessage",newMessage);
        };
	return oldChatty;
})(Chatty || {});



// // lopp over the array using for each if item === item.innerText remove from array


// getMessages.splice(getMessages.indexOf(dM), 1 )