define(["cookie","mycartcookie","cartRD"],function(cookie,mycartcookie,cartRD){
    new mycartcookie("#buyBtn");
    var url = "http://localhost:83/kaola";
    new cartRD(".m-cartbox",url);
});