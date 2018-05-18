"use strict";

define(["Rendering"], function (Rendering) {
    // pagination.init();
    // console.log(pagination)

    console.dir(Rendering);
    var url = "http://localhost:83/kaola";
    new Rendering(url, ".goodsWrap");
});