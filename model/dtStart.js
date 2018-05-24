define(["cookie","mycookie","detailsRD"],function(cookie,mycookie,detailsRD){
    new mycookie("#part1");
    var url = "http://localhost:83/kaola";
    new detailsRD("#j-producthead",url);
});