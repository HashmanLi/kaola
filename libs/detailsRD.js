define(["jquery","cookie"],function(){
    function detailsRD(ele,url){
       
        this.wrap = $(ele);
        this.url = url;
        if (this.url == "" || this.wrap.length == 0) return;
        this.init();
    }
    detailsRD.prototype={
        constrocter:detailsRD,
        init(){
            this.load()
            .then(function(res){
                this.goodsjson = res.zone_data[0].showGoodsList;
                this.checkGood();
                this.rendering();
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
            this.cookie = $.cookie("goodslist");
            console.log(this.cookie);
            this.cookie = JSON.parse(this.cookie);
            this.cookie.forEach(function(ele,index){
                this.pointId = ele.id;
                this.pointnum = ele.num;
                //console.log(this.pointId)
                
            }.bind(this));
        },
        rendering(){
            this.goodsjson.forEach(function(element,index){
                if(element.goodsId==this.pointId){
                    this.pointjson = this.goodsjson[index];
                    this.html = `
                    <div class="PInfoWrap clearfix">
                    <div class="PImgBox m-productimgbox">
                        <a href="" class="scrollBtn scrollleft sign icon-arrow-left scrollDis" hidefocus = "true">    
                        </a>
                        <a href="" class="scrollBtn scrollRight sign icon-arrow-right scrollDis" hidefocus = "true"></a>
                        <div class="litimg_box">
                            <ul id="litimgUl" class="clearfix" style="left: 0px; width: 3200px;">
                                <li>
                                    <a href="">
                                        <img src="//haitao.nos.netease.com/1bklpi6nq50_800_800.jpg?imageView&thumbnail=64x0&quality=85" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="//haitao.nos.netease.com/1bklpi7gs87_800_800.jpg?imageView&thumbnail=64x0&quality=85" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="//haitao.nosdn2.127.net/1bklpi8ep96_800_800.jpg?imageView&thumbnail=64x0&quality=85" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="//haitao.nosdn2.127.net/1bklpi91a75_800_800.jpg?imageView&thumbnail=64x0&quality=85" alt="">
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div id="showImgBox">
                        <img class="proImg" style="height:400px; width:400px" src="${this.pointjson.goods.imageUrl}">
                            <a class="showLocalImg sign icon-search2" id="showLocalImg" title="查看大图" hidefocus="true" href="http://haitao.nosdn2.127.net/1bklpi8ep96_800_800.jpg?imageView&thumbnail=800x0&quality=85">
                            
                            </a>
                            <div id="showDetails" style="display: none">
                                <img src="//haitao.nos.netease.com/1bklpi6nq50_800_800.jpg?imageView&thumbnail=800x0&quality=85" id="showImgBig" style="top: -400px; left: -400px;" alt="">
                            </div>
                        </div>
                    </div>
                    <dl class="PInfo PInfo-standout">
                        <dt class="PTags f-hkdn">
                            <i class="selftag tag">自营</i>
                            <i class="crosstag tag">跨境</i>
                        </dt>
                        <dt class="orig-country">
                            <img src=${this.pointjson.goods.brandLogo} alt="">
                            <span>${this.pointjson.goods.countryCode.name}</span>
                            <span class="split">|</span>
                            <a class="brand" href="">${this.pointjson.goods.brandName}</a>
                        </dt>
                        <dt class="product-title">
                            <span>${this.pointjson.goods.title}</span>
                        </dt>
                        



                        <dd class="m-price-wrap">
                            <div class="m-price">
                                <span class="m-line-title m-price-title j-price-title">售价</span>
                                <div class="m-price-cnt">
                                    <span class="PInfo_r currentPrice">      
                                        <span>￥${this.pointjson.goods.actualCurrentPrice}</span>
                                        <span class="m-memberLabel">包邮</span>
                                        <span class="PInfo_r marketPrice addprice j-marketprice">
                                            参考价&nbsp;&nbsp;￥
                                            <span>${this.pointjson.goods.marketPrice}</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div class="m-vipmember">
                                    <div class="msg">
                                        <img class="vicon" src="//haitao.nos.netease.com/4ff37eb9-e315-414f-a6c3-10fa35f35df3.png" alt="">
                                        <span class="vtxt">
                                                黑卡下单再享96折
                                        </span>
                                        <a class="becomevip" href="">开通黑卡</a>
                                    </div>
                                </div>
                        </dd>
                        <!--活动-->
                        <!-- <dd class="m-promotiontitle single">
                            <div class="box">
                                <div class="m-zd-prt">
                                    <span class="m-line-title">活动</span>
                                </div>
                                <div class="promotionwrap">
                                    <div class="m-zd-prt">
                                        <span class="m-dp-prt-title">新人专享</span>
                                        <span class="m-zd-prt-desc ellipsis">
                                            <span>新人专享</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </dd> -->
                        <!--税费-->
                        <dd class="m-taxrateline f-cb m-taxrateline-2">
                            <span class="m-line-title f-fl">税费</span>
                            <div class="descwrap f-fl">
                                <div class="taxmsg">预估￥
                                    <b>5.04</b>
                                    ，实际税费请以提交订单时为准
                                    <span class="skutaxdesc">
                                        <span class="maintext">
                                                税费收取规则
                                                <span class="tri_up iconfont icon-triup"></span>
                                                <span class="tri_down iconfont icon-tridown"></span>
                                        </span>
                                    </span>
                                </div>
                            </div>

                        </dd>
                        <!--运费-->
                        <dd class="postage">
                            <span class="m-line-title">运费</span>
                            <div class="msg">
                                <span>
                                    <span class="from2">至</span>
                                    <div class="mr20 m-addrw">
                                        <div class="m-addr">
                                            <div class="iptw">
                                                <span class="iptmsg" title="北京/东城区">北京/东城区</span>
                                                <span class="iptdown icon-tridown"></span>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span class="feeInfo">
                                    <span class="feeTxt">
                                        <span class="postagedesc">免运费</span>
                                    </span>
                                </span>
                            </div>
                        </dd>
                        <!--服务-->
                        <dd class="m-service f-cb f-hkdn">
                            <span class="m-line-title f-fl">服务</span>
                            <span class="send">
                                    本商品由&nbsp;自营保税仓&nbsp;发货
                            </span>
                        </dd>
                        <!--分割线-->
                        <dd class="buyBox j-skubox nosku" id="js_skuBox"></dd>
                        <!--数量-->
                        <div class="m-buyBox">
                            <span class="m-line-title fl m-line-am-30">数量</span>
                            <em name="js_buyBox" class="buybox" id="j_buyboxnum">
                                <span class="ctrnum-wrap">
                                    <a href="" class="ctrnum-b ctrnum-b-rd icon-minus ctrnum-b-dis" hidefocus="true"></a>
                                    <input type="text" name="goods[0].tempBuyAmount" class="ctrnum-qty" autocomplete="off" value="${this.pointnum}">
                                    <a href="" class="ctrnum-b ctrnum-b-ad icon-plus ctrnum-b-dis" hidefocus="true"></a>
                                </span>
                                <span class="domeTips z-isRed" id="js_dometxt">单次限购1件</span>
                                <span class="dome hide" id="js_dome"></span>
                            </em>
                        </div>
                        <!--说明-->
                        <dd>
                            <div class="buyBtns">
                                <a  id="buyBtn" class="j-buynow-btn buynowonly" hidefocus="true" price="${this.pointjson.goods.actualCurrentPrice}" goodsid="${this.pointjson.goodsId}" >加入购物车</a>
                            </div>
                        </dd>
                    </dl>
                </div>
                    `;
                    this.wrap.html(this.html);
                }
            }.bind(this))
        }
    }
    return detailsRD;
});