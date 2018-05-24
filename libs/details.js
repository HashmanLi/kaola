$(function(){
    //$.cookie()实现

// <a href="http://localhost:83/dist/details.html" class="cart-btn cart-btn-1" style="background-color:#d22147;color:#ffffff" goodsId:${element.goods.goodsId}>立即购买</a>
    $("#part1").on("click",function(event){
       this.iD = $(event.target).attr("goodsid");
       this.num = 1;
        // console.log(this.iD);
       var opt = 
       {
           id:this.iD,
           num:this.num
       };
       
       this.getcookie = $.cookie('goodslist');
       this.getcookie =  JSON.parse(this.getcookie);
       
       if(!this.getcookie){
        var goodslist = [];
        goodslist.push(opt);
        $.cookie('goodslist',goodslist,{
            expires:7,
            path:'/',  
        })
        console.log($.cookie('goodslist'));
       }else{
           for(var i = 0 ;i<this.getcookie.length;i++){
               if(this.getcookie[i].iD == this.iD){
                this.getcookie[i].num +=1;
                $.cookie('goodslist',goodslist,{
                    expires:7,
                    path:'/',  
                })
               }else{
                   this.getcookie.push(opt);
                   $.cookie('goodslist',goodslist,{
                    expires:7,
                    path:'/',
                })
               }
           }
       }
    })



    //document.cookie实现

})