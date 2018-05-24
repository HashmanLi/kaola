define(["jquery","cookie"],function(){
    function cartRD(ele,url){
       
        this.wrap = $(ele);
        this.url = url;
        if (this.url == "" || this.wrap.length == 0) return;
        this.init();
    }
    cartRD.prototype={
        constrocter:cartRD,
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
            this.cookie = $.cookie("goodslist");
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
                    this.html += ``
                    
                    this.wrap.html(this.wrap.html()+this.html);
                }
            }.bind(this))
        }
    }
    return cartRD;
});