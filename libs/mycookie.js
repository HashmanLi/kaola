

define(["jquery","cookie"],function(){
  
    function mycookie(ele){

        this.ele = ele ;
        if(this.ele.length==0)return 0;
        this.init();
    }
    //document.cookie实现
   mycookie.prototype = {
       constrocter:mycookie,
       init(){
        $(this.ele).on("click",function(event){
               this.id = $(event.target).attr("goodsid");
               this.opt = 
               {
                   id:this.id,
                   num:1
               };
                this.cookiecheck();   
            }.bind(this))
    },
    cookiecheck(){   
        this.getcookie = $.cookie('goodslist');
        if(!this.getcookie){
            this.goodslist = [];
            this.goodslist.push(this.opt);
            this.goodslistStr = JSON.stringify(this.goodslist);
            $.cookie('goodslist',this.goodslistStr,{
                expires:7,
                path:'/',  
            })   
        }else{
            this.getcookie= $.cookie("goodslist");
            this.getcookie = JSON.parse(this.getcookie); 
            this.last = this.getcookie.length;
            this.getcookie.forEach(function(element,index){
                // console.log(element.id,this.id );
                if(element.id==this.id){
                    
                    element.num=element.num+1;
                    
                }else if(index==this.last-1){
                    console.log(this.opt);
                    
                    this.getcookie.push(this.opt)
                }      
            }.bind(this))
            this.goodslistStr = JSON.stringify(this.getcookie);
            $.cookie('goodslist',this.goodslistStr,{
                    expires:7,
                    path:'/',  
            }) 
            console.log(this.goodslistStr); 
        }   
         
    }
}
    return mycookie;
});



