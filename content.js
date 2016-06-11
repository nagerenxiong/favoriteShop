var url = window.location.href;
$.ajax({
	type: "get",
	timeout: 6000,
	async: true,
	url: "https://favorite.taobao.com/popup/add_collection.htm?spm=2013.1.1000126.d22.oUVOn6&id=100090892&itemid=100090892&itemtype=0&ownerid=e71f91b7b5d4190e2f0b7ebc51630896&scjjc=2&_tb_token_=DyoKBwEFXI6GQQ",
	success: function(data) {
		console.log(data);
	}
});
$.ajax({
	type: "post",
	timeout: 6000,
	async: true,
	url: "http://ruyi.taobao.com/my/feed/want",
	data:{
		url:'https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-14143658827.2.jrHLz3&id=532885696316',
		source:'ext'
	},
	success: function(data) {
		console.log(data);
	}
});
$.ajax({
	type: "post",
	timeout: 6000,
	async: true,
	url: "http://ruyi.taobao.com/my/feed/want",
	data:{
		url:'https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-14143658827.14.jrHLz3&id=533705559424',
		source:'ext'
	},
	success: function(data) {
		console.log(data);
	}
});
$.ajax({
	type: "post",
	timeout: 6000,
	async: true,
	url: "http://ruyi.taobao.com/my/feed/want",
	data:{
		url:'https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-14143658827.12.jrHLz3&id=533768178206',
		source:'ext'
	},
	success: function(data) {
		console.log(data);
	}
});


// chrome.runtime.sendMessage({
// 	'className': className,
// 	'fag': 0
// });
// chrome.runtime.sendMessage({
// 	fag: 1
// }, function(response) {
// 	className = response.className;
// });