document.addEventListener('DOMContentLoaded', function(){

	/*document.querySelector("title").innerHTML="madhouse"

	//$("body").html("hello madhouse")

	console.log(chrome)*/

	/* chrome.runtime.getURL(function(x){

		console.log(x)
	}) */


	console.log(chrome)
	console.log(document.title)

	let img = document.querySelector("img")

	let src = $(img).attr("src")

	chrome.runtime.sendMessage({ greeting: document.title,img:src }, function (response) {

	//	console.log('收到来自后台的回复：' + response);
	});


});	


