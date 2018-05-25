// define(["cookie","mycookie","detailsRD","mycartcookie","cartRD"],function(cookie,mycookie,detailsRD,mycartcookie,cartRD){
//     new mycookie("#part1");
//     var url = "http://localhost:83/kaola";
//     new detailsRD("#j-producthead",url);
//     new mycartcookie("#buyBtn");
//     new cartRD(".m-cartbox",url);
// });

define(["cookie","mycookie","detailsRD","mycartcookie","cartRD"],function(cookie,mycookie,detailsRD,mycartcookie,cartRD){
    new mycookie("#part1");
    var url = "http://localhost:83/kaola";
    new detailsRD("#j-producthead",url);
    // new mycartcookie("#buyBtn");
    // new cartRD(".m-cartbox",url);
});