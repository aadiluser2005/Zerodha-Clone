const {model}= require("mongoose");
const {watchListSchema}=require("../schemas/WatchListSchema");


const WatchListModel= model("watchlist",watchListSchema);


module.exports={WatchListModel};