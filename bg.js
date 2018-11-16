chrome.runtime.onInstalled.addListener(function(){

	/* console.log("********************************************************")
	
	console.log(chrome)
	
	console.log("********************************************************")
 */
/* 	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					// 只有打开百度才显示pageAction
					new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'baidu.com'}})
				],
				actions: [new chrome.declarativeContent.ShowPageAction()]
			}
		]);
	}); */

/* 
	console.log(this)
	console.log(chrome)
 */
/* 
	fetch("https://randomuser.me/api/").then(x=>{

		x.json().then(xx=>{

			console.log(xx.results)
		})
	}) */
/* 
	chrome.notifications.create(null, {
		type: 'basic',
		iconUrl: '1.png',
		title: '这是标题',
		message: '您刚才点击了自定义右键菜单！'
	}); */
});


/* // background.js
chrome.contextMenus.create({
	title: '使用度娘搜索：%s', // %s表示选中的文字
	contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
	onclick: function(params)
	{
		// 注意不能使用location.href，因为location是属于background的window对象
		chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
	}
}); */

/* 
chrome.bookmarks.getTree(function(_list){

	console.log(_list);

})
 */

/* chrome.bookmarks.create({parentId:"2",title:"hello 123","url":"http://madhouse.cn"},function(_result){

	console.log(_result)

}) */


chrome.contextMenus.create({
	title:"这个是madhouse插件:'%s'",
	contexts: ["selection"],
	onclick:function(info,tab){

		/* console.log(info)
		console.log(tab) */
	}
},function(_result){
	console.log(_result)
})

function notifications(info){

	console.log(info)
	chrome.notifications.create(null, {
		type: 'basic',
		iconUrl:'1.png',
		title: '提示',
		message: info.greeting||'no message'
	});
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	//console.log('收到来自content-script的消息：');
	//console.log(request, sender, sendResponse);
	//sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
	
	notifications(request)
});