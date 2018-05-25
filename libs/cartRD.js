define(["jquery","cookie"],function(){
    function cartRD(ele,url){
       console.log("cartRD已加载");
        this.wrap = $(ele);
        console.log(this.wrap);
        this.url = url;
        if (this.url == "" || this.wrap.length == 0) return;
        this.init();
    }
    cartRD.prototype={
        constructor:cartRD,
        init(){
            this.load()
            .then(function(res){
                this.goodsjson = res.zone_data[0].showGoodsList;
                this.checkGood();
                
            }.bind(this))
        },
        load(){
            var option = {
				url: this.url,
				type: "get",
				dataType: "json"
			};
			return $.ajax(option);
        },
        checkGood(){
            this.cookie = $.cookie("cartgoodslist");
            console.log(this.cookie);
            this.cookie = JSON.parse(this.cookie);
            this.cookie.forEach(function(ele,index){
                this.pointId = ele.id;
                
                this.pointnum = ele.num;
                //console.log(this.pointId)
                this.rendering();
            }.bind(this));
        },
        rendering(){
            this.goodsjson.forEach(function(element,index){
                if(element.goodsId==this.pointId){
                    this.html = "";
                    this.pointjson = this.goodsjson[index];
                    this.html += `
                <div class="m-cart">
                        <div class="ware">
                            <input type="checkbox" class="u-chk" name="cartAll" checked="checked">
                            <b class="u-cartlabel">自营</b>
                            <strong class="warename">${this.pointjson.goods.goodsSource}</strong>
                        </div>
                        <div class="goods">
                            <ul class="m-goods">
                                <li class="actitm ">
                                    <div class="vline"></div>
                                    <div class="actinfo f-cb">
                                        <span class="u-actlabel z-full">满件减</span>
                                        <div class="rule f-fl f-vama">
                                            <span class="crtrule">已满足【满1件享8.0折】</span>
                                        </div>
                                    </div>
                                    <ul class="actgoods">
                                        <li class="gooditm z-selected">
                                            <div class="col col0">
                                                <input type="checkbox" class="u-chk" name="selectGood" checked="checked">
                                            </div>
                                            <div class="col col2">
                                                <a href="" class="imgwrap">
                                                    <img src="${this.pointjson.goods.imageUrl}" style="height:80px;width:80px;" alt="">
                                                </a>
                                                <div class="txtwrap">
                                                    <h3 class="goodtlt">
                                                        <a href="" title="${this.pointjson.goods.title}">
                                                        ${this.pointjson.goods.title} 
                                                        </a>
                                                    </h3>
                                                    <p class="returninfo f-toe" title="支持7天无忧退货">
                                                        <img src="//haitao.nos.netease.com/testj43rhf7510001.png" alt="">
                                                        <span class> 支持7天无忧退货</span>
                                                    </p>
                                                    <div class="goodtax f-vama"></div>
                                                </div>
                                            </div>
                                        <div class="col col3">
                                            <del class="oldprice"> ${this.pointjson.goods.marketPrice}</del>
                                            <div class="newprice">
                                                <span>${this.pointjson.goods.suggestPrice}</span>
                                            </div>
                                        </div>
                                        <div class="col col4">
                                            <span class="u-setcount">
                                                <span class="minus z-dis" minues=1 goodsid=${this.pointjson.goodsId}>-</span>
                                                <input type="text" class="ipt" goodsid=${this.pointjson.goodsId} value="${this.pointnum}" max=99>
                                                <span class="plus" plus=1 goodsid=${this.pointjson.goodsId}>+</span>
                                            </span>
                                            <p class="limitmsg"></p>
                                        </div>
                                        <div class="col col5">
                                            <span class="sum sumrow">${(this.pointjson.goods.suggestPrice)*this.pointnum}</span>
                                            <p class="taxrow f-vama">
                                                <span class="u-taxval z-sel">
                                                    预估税费:￥26.7
                                                </span>
                                            </p>
                                        </div>
                                        <div class="col col6">
                                            <a class="u-opt" goodsid=${this.pointjson.goodsId}>删除</a>
                                            <span class="u-opt">移入我的收藏</span>
                                        </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                </div>
                <script src="libs/cartcontrol.js"></script>
                
                        `
                   
                    this.wrap.html(this.html+this.wrap.html());
                }
            }.bind(this))
        }
    }
    return cartRD;
});