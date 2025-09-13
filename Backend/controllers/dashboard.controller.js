const {HoldingsModel} =require("../model/HoldingsModel");
const {PositionsModel}=require("../model/PositionsModel");
const {userModel}=require("../model/userModel");
const {WatchListModel}=require("../model/WatchListModel");

const home=(req,res)=>{
  res.status(200).json({url:process.env.Dashboard_URL,usermail:req.user.email});
}

const userinfo=async(req,res)=>{
      const email=req.user.email;
       const user=await userModel.find({email:email});
      // console.log(user);
       res.status(200).json({user});
}

const allholdings=async(req,res)=>{
     const allHoldings=await HoldingsModel.find({});
  
    res.status(200).json({allHoldings:allHoldings});
}
const allpositions=async(req,res)=>{
   const allPositions=await PositionsModel.find({});

    res.status(200).json(allPositions);
}

const allwatchlist=async(req,res)=>{
  const watchList=await WatchListModel.find({});
  res.status(200).json(watchList);
}

module.exports={allholdings,allpositions,home,userinfo,allwatchlist};
