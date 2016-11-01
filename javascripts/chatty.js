"use strict";
var Chatty = (function() {
    var messages = [];
    return {
        loadMessages: function(callBack) {
            $(function () {
            $.getJSON("data/messages.json", function (data) {
                console.log("happened");
                // jQuery.parseJSON(data);
               messages = data;
                console.log("data", data);
                console.log("messages", messages);
                callBack(messages);
    });
});

        },
        getMessages: function() {
            return messages;

        }
    };
})();


    //         
    //         
//                 $(function () {
//     $.getJSON("data/messages.json", function (data) {
//         console.log("happened");
//         jQuery.parseJSON(data);
//         messages.push(data);
//         console.log("data", data);
//         console.log("messages", messages);
//         callBack(messages);
//     });
// });
// 


       // var loader = new XMLHttpRequest();
       //      loader.open("GET", "data/messages.json");
       //      loader.send();
       //      loader.addEventListener("load", function() {
       //      messages = JSON.parse(this.responseText).messages;
       //      callBack(messages);
       //      });
       //      
 //    $(function() {
 //                $.ajax({
 //                url: "data/messages.json"
 //                }).done(function() {
 //                    console.log("happened");
 //                messages = JSON.parse(this.responseText).messages;
 //                console.log("messages", messages);
 //                // callBack(messages);
 //                });
 // });

