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
				// console.log(res);
				// console.log(1);
				this.goodjson = res.zone_data[0].showGoodsList;
				this.detailsjson = res.zone_data[0].zoneConfigMap;
				console.log(this.goodjson);
				this.render();
			}.bind(this));
		},
		load: function load() {
			var option = {
				url: this.url,
				type: "get",
				dataType: "json"
				
			};
			return $.ajax(option);
		},
		render: function render() {
			this.html ="";
			this.goodjson.forEach(function(element){
				this.html +=`
				<div class='detailWrap clearfix'>
				<a href="" class="pic">
				<img class="proImg" src=${element.goods.imageUrl}>
				<img class="w-brand-img" src=${element.goods.originCountryFlag}>
				<span class="proComment" style="display: none">
					<span class="bg"></span>
					<span class="data clearfix hasDetail">
						<span class="percentStar clearfix">
							<span class="fullStar     w10"></span>
							<span class="emptyStar     e10"></span>
						</span>
						<span class="num">2952条评论</span>
					</span>
					<span class="detail" style="display: block;">
						<b class="rollText" style="margin-left: -14px;">：本来买来给女儿用的，结果买刚回来我就脸过敏了。几天不敢洗脸用护肤品。有一天洗脸之后用了这个。脸没有红肿，反而不过敏了，太神奇了。      ：全都用完了才来点评，捂脸，哈哈！非常好用，物美价廉，吸收很快不油腻。宝宝皮肤护理佳品      ：洗完澡以后，一边抚触一边涂抹全身~非常好用～！</b>
					</span>
				</span>
			</a>
			<div class="proinfo">
				<h3 class="tit">
					<a href="" class="titLink">${element.goods.title}</a>
					<a href="" class="z-red">${element.goods.shortTitle}</a>
				</h3>
				<ul class="tags clearfix">
					
					<li class="tagItem">包邮</li>
				</ul>
				<p class="w-price">
					<strong>
						<span class="symbol">¥${element.goods.marketPrice}</span>
					</strong>
				</p>
				<a href="http://localhost:83/dist/details.html" class="cart-btn cart-btn-1" style="background-color:#d22147;color:#ffffff" goodsId=${element.goods.goodsId}>立即购买</a>
				
			</div>
			</div>
				`
				
			}.bind(this));
			// this.html +="";
			this.wrap.html(this.wrap.html()+this.html);
			
		}
	};

	return Rendering;
});