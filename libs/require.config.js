"use strict";

requirejs.config({
    paths: {
        //注意引入顺序
        "jquery": "./libs/jquery-3.3.1",
        "dtStart":"./model/dtStart",
        "cookie":"./libs/jquery.cookie",
        "mycookie":"./libs/mycookie",
        "mycartcookie":"./libs/mycartcookie",
        "detailsRD":"./libs/detailsRD",
        "Renderstart": "./model/Renderstart",
        "Rendering": "./libs/Rendering",
        "cartstart":"./model/cartstart",
        "cartRD":"./libs/cartRD",
        "scroll":"./model/ScRoll"
    }
});