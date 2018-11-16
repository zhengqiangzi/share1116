$("#sureButton").click(function(){

    $("#inp").html("madhouse is great")
   // window.confirm("hello")

    var bg = chrome.extension.getBackgroundPage();

         bg.document.title = "hhhhhhhhhhhhhh";
    
        chrome.windows.getCurrent({},function(crw){
           // alert(crw)
        })


    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        chrome.tabs.sendMessage(tabs[0].id, "hhhhhhhh", function (response) {

            bg.notifications(123)

        });
    });

})

$(function(){

    $("#inp").html("hello madhouse")

})

