//用于购物车控制数量与删除

$(function(){
     //计算总数和总价
     this.getcookie= $.cookie("cartgoodslist");
     this.getcookie = JSON.parse(this.getcookie);
     for(var i = 0 ; i<this.getcookie.length;i++){
         this.all += this.getcookie[i].num;
         this.pricesum +=(this.getcookie[i].num)*(this.getcookie[i].price);
     }
     $("#numsum").html(this.all);
     $("#pricesum").html(this.pricesum);
    
      //减少
    $(".minus").on("click",function(){
        this.getcookie= $.cookie("cartgoodslist");
    this.getcookie = JSON.parse(this.getcookie);
        this.goodid = $(".minus").attr("goodsid");
        for(var i = 0 ; i<this.getcookie.length;i++){
            if(this.getcookie[i].id == this.goodid&&this.getcookie[i].num>1){
                this.getcookie[i].num -= 1; 
            }  
            this.all += this.getcookie[i].num;
            this.pricesum +=(this.getcookie[i].num)*(this.getcookie[i].price);
        }
        this.cartgoodslistStr = JSON.stringify(this.getcookie);
        $.cookie('cartgoodslist',this.cartgoodslistStr,{
                expires:7,
                path:'/',  
        })  
        console.log(this.cartgoodslistStr);
        //计算总数和总价
        $("#numsum").html(this.all);
        $("#pricesum").html(this.pricesum);
        location.reload();  
    })


   //增加
    $(".plus").on("click",function(){
        this.getcookie= $.cookie("cartgoodslist");
        this.getcookie = JSON.parse(this.getcookie);
        this.goodid = $(".plus").attr("goodsid");
        console.log(this.goodid)
        for(var i = 0 ; i<this.getcookie.length;i++){

            console.log(this.goodid);
            if(this.getcookie[i].id == this.goodid){
                this.getcookie[i].num += 1; 
            } 
            this.all += this.getcookie[i].num;
            this.pricesum +=(this.getcookie[i].num)*(this.getcookie[i].price);
        }
        this.cartgoodslistStr = JSON.stringify(this.getcookie);
        $.cookie('cartgoodslist',this.cartgoodslistStr,{
                expires:7,
                path:'/',  
        }) 
        console.log(this.cartgoodslistStr); 
        //计算总数和总价
        $("#numsum").html(this.all);
        $("#pricesum").html(this.pricesum);
        location.reload(); 
    })

    //删除商品
   $(".u-opt").on("click",function(){
        this.getcookie= $.cookie("cartgoodslist");
    this.getcookie = JSON.parse(this.getcookie);
        this.goodid = $(".u-opt").attr("goodsid");
        for(var i = 0 ; i<this.getcookie.length;i++){
            if(this.getcookie[i].id == this.goodid){
                this.getcookie.splice(i,1); 
            }   
        }
        this.cartgoodslistStr = JSON.stringify(this.getcookie);
        $.cookie('cartgoodslist',this.cartgoodslistStr,{
                expires:7,
                path:'/',  
        })  
        console.log(this.cartgoodslistStr);

        //计算总数和总价
        this.getcookie= $.cookie("cartgoodslist");
        this.getcookie = JSON.parse(this.getcookie);
        for(var i = 0 ; i<this.getcookie.length;i++){
            this.all += this.getcookie[i].num;
            this.pricesum +=(this.getcookie[i].num)*(this.getcookie[i].price);
        }
        $("#sum").html(this.all);
        $("#pricesum").html(this.sum);
                location.reload();  
    })
})



