1.此套电商搭载Nginx服务器，json接口来自于网络，在proxy.conf中已配置好，您在目录中可以找到它。

2.项目中的index.html不是主页Activeindex.html才是主页。
3.登录注册是用local storage模拟的，有些瑕疵。
4.details.html 是详情页，它是用cookie模拟的，通过主页点击创建cookie然后才渲染，请不要直接打开它，否则将是空的。
5.主页的详情只绑定了"口碑爆款"部分，（由于原网站是懒加载，每个栏目都是单独的json）我只是用了那一部分的json，请点击立即购买以便跳转到详情页
6.购物车页也是通过cookie模拟的，但是另外一套，点击加入购物车不会跳转，可以点击右上角的购物车跳转，购物车的功能基本实现，除了在页面上实时渲染所有商品总数与总价
7.还用到了requirejs，gulp，由于gulp取不到要的接口，才更换成的nginx
8.loginF.html文件是想通过在页面引入模版页而写的模版（并没完成），此次网站没有用到他，请忽略他。

9.nginx端口配置83，请务必改成83口，否则有些跳转会失效

10.问题：
（1）关于用jq写三级菜单，虽然实现了，但是不太稳定。
（2）一开始使用jq的事件代理来选取通过cookie渲染的页面中的元素，但是由于页面的层次问题（具体不知道为啥），会出先选不到的情况，所以在购物车页面中，没有使用事件代理，
所以想通过渲染的时候给目标添加以goodid为名字的id，但是不安全，有待改进。
