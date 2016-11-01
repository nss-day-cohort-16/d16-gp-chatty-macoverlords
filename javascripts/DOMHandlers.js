"use strict";

$(document).ready(function(){

    $("#darkTheme").click(function () {
        $("#messageArea").toggleClass("makeDark");
    });

    $("#largeText").click(function () {
        $("#messageArea").toggleClass("fuh");
    });

    $("#seizure").click(function () {
        $("#messageArea").toggleClass("nick");
    });

    $("#clearBtn").click(function() {
     $("li").remove();
    });

    $(document).on('click','.delete',function() {
        $(this).closest("li").remove();
    });

    });

    $("#messageField").keypress(function(e) {
        if(e.which === 13) {
        Chatty.showMsg($("#messageField").val());
        $("#messageField").val('');
    }
});






