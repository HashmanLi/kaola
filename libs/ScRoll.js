"use strict"; 

;+function(factory){
	if(typeof define === "function" && define.amd){
       define(["jquery"],factory)
    }else{
        factory(jQuery);
    }
}(function($){
	function ScRoll(libele,ele){
        this.ele = $(ele);
        this.libele = $(libele);
        this.init();
    }
    ScRoll.prototype = {
		constructor:ScRoll,
		init(){
			this.check();
		},
		check(){
			this.libele.scroll(function(){
				// var a = this.libele.scrollTop();
					if(a<1000){
						this.ele.css({
							display:"none"	
						})
					};
					if(a>=1000 && a<2700){
						// console.log(this.ele.position().top)
						this.ele.css({
							top:"200px",
							position:"fixed",
							display:"block"	
						})
					};
					if(a>=2700){
						this.ele.css({
							top: "2900px",
							position: "absolute",
							display: "block"	
									})
					};
			}.bind(this))
		}
	}
	return scRoll
})