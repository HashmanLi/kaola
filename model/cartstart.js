define(["cookie","mycartcookie","cartRD","detailsRD"],function(cookie,mycartcookie,cartRD,detailsRD){
    var url = "http://localhost:83/kaola";
    // new detailsRD("#j-producthead",url);
    new mycartcookie("#j-producthead");
    new cartRD("#cartbox",url);
});