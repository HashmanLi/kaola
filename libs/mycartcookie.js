//购物车cookie
define(["jquery","cookie"],function(){
  
    function mycartcookie(ele){
       
        this.ele = ele ;
        console.log(this.ele);
        if(this.ele.length==0)return 0;
       
        this.init();
    }

   mycartcookie.prototype = {
       constructor:mycartcookie,
       init(){
        console.log($(this.ele));
        $(this.ele).on("click",function(event){
            
            // console.log(event.target);
               this.id = $(event.target).attr("goodsid");
               this.price = $(event.target).attr("price");
               this.opt = 
               {
                   id:this.id,
                   num:1,
                   price:this.price
               };
                this.cookiecheck();   
            }.bind(this))
    },
    cookiecheck(){   
        this.getcookie = $.cookie('cartgoodslist');
        if(!this.getcookie){
            this.cartgoodslist = [];
            this.cartgoodslist.push(this.opt);
            this.cartgoodslistStr = JSON.stringify(this.cartgoodslist);
            $.cookie('cartgoodslist',this.cartgoodslistStr,{
                expires:7,
                path:'/',  
            })   
        }else{
            this.getcookie= $.cookie("cartgoodslist");
            this.getcookie = JSON.parse(this.getcookie); 
            this.last = this.getcookie.length;
            this.getcookie.forEach(function(element,index){
                // console.log(element.id,this.id );
                if(element.id==this.id){
                    element.num=element.num+1;   
                }else if(index==this.last-1){
                    // console.log(this.opt);
                    this.getcookie.push(this.opt)
                }      
            }.bind(this))
            this.cartgoodslistStr = JSON.stringify(this.getcookie);
            $.cookie('cartgoodslist',this.cartgoodslistStr,{
                    expires:7,
                    path:'/',  
            }) 
            console.log(this.cartgoodslistStr); 
        }   
         
    }
}
    return mycartcookie;
});



