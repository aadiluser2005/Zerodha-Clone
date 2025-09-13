const {model}=require("mongoose");
const {userSchema}=require("../schemas/userSchema.js");


const userModel=model('user',userSchema);

module.exports={userModel};