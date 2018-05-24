
define(["Rendering"], function (Rendering) {
    // pagination.init();
    // console.log(pagination)
    // console.dir(Rendering);
    var url = "http://localhost:83/kaola";
    var url2  = "http://localhost:83/kaola2";
    var url3 = "http://localhost:83/kaola3";
    var url4  = "http://localhost:83/kaola4";
    var url5 = "http://localhost:83/kaola5";
    new Rendering(url, "#part1");
    new Rendering(url2,"#part2");
    new Rendering(url3,"#part3");
    new Rendering(url4,"#part4");
    new Rendering(url5,"#part5");
   
});

define(["scroll"],function(scroll){
    new scroll("window","#sidesCartbox");
});