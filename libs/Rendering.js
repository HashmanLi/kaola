"use strict";

;+function (factory) {
	if (typeof define === "function" && define.amd) {
		define(["jquery"], factory);
	} else {
		factory(jQuery);
	}
}(function ($) {
	function Rendering(url, ele) {
		this.url = url;
		this.wrap = $(ele);
		if (this.url == "" || this.wrap.length == 0) return;
		this.init();
	}
	Rendering.prototype = {
		constructor: Rendering,
		init: function init() {
			this.load().then(function (res) {
				console.log(res);
				// console.log(1);
				// this.goodjson = res.zone_data[0].showGoodsList;
				// this.detailsjson = res.zone_data[0].zoneConfigMap;
				// console.log(this.goodjson,this.detailsjson);
				this.render();
			}.bind(this));
		},
		load: function load() {
			var option = {
				url: this.url,
				type: "get",
				dataType: "json"
				// jsonp : 'callback',
				// jsonpCallback: 'handleResponse',
				// data:{t:"1526564654705"}
				// jsonpCallback: 'handleResponse', //设置回调函数名
				// data : {
				//     q : "javascript", 
				//     count : 1
				// }, 
				// success: function(response, status, xhr){
				//     console.log('状态为：' + status + ',状态是：' + xhr.statusText);
				//     console.log(response);
				// }
			};
			return $.ajax(option);
		},
		render: function render() {}
	};

	return Rendering;
});