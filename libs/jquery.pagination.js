"use strict";

;+function (factory) {
    //AMD判断;define是AMD模式特有的函数，它将js的调用模块化这里判断传过来的函数是否用了AMD
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {
    //插件代码;
    function Pagination(url, item_main, button_main) {
        this.url = url;
        this.page = 1;
        this.pageNum = 5;
        this.item_main = $(item_main);
        this.button_main = $(button_main);
        if (this.url == "" || this.item_main.length == 0 || this.button_main.length == 0) return;
        this.init();
    }
    Pagination.prototype = {
        constructor: Pagination,
        init: function init() {
            //console.log(1);
            this.load_data().then(function (res) {
                // console.log(res);
                this.json = res.data.list;
                this.render_page();
            }.bind(this));
            this.create_btn();
            this.button_main.on("click", "a", $.proxy(this.change_page, this));
        },
        load_data: function load_data() {
            var opt = {
                url: this.url,
                dataType: "jsonp",
                data: { page: this.page }
            };
            return $.ajax(opt);
        },
        render_page: function render_page() {
            var html = "";
            this.json.forEach(function (item) {
                html += "<li class=\"goods\">\n                            <img src=\"" + item.image + "\" alt=\"\">\n                            <h5>" + item.title.substring(0, 18) + "...</h5>\n                            <h6>" + item.price + "</h6>\n                            <button>\u8D2D\u4E70</button>\n                        </li>";
            });
            console.log(html);
            this.item_main.html(html);
        },
        create_btn: function create_btn() {
            for (var i = 0; i < this.pageNum; i++) {
                var $a = $("<a>");
                $a.attr("href", "#javascript");
                $a.html(i + 1);
                this.button_main.append($a);
            }
        },
        change_page: function change_page(event) {
            var target = event.target || event.srcElement;
            var index = $(target).index();
            // console.log(index);
            this.page = index + 1;
            this.load_data().then(function (res) {
                this.json = res.data.list;
                this.render_page();
            }.bind(this));
        }
    };

    $.pageation = Pagination;

    return Pagination;
});