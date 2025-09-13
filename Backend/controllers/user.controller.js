const {httpstatus} =require("http-status");
const {userModel}=require("../model/userModel.js");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt=require("jsonwebtoken");

const login=async(req,res)=>{
         const {email,password}=req.body;
          
         if(email===null||password===null){
            res.status(400).json({message:"Please provide email and password"});
            return;
         }
         try{
            const user=await userModel.findOne({email:email});
            if(user===null){
                 res.status(200).json({message:"No user found "});
                 return;
            }

            

             
             

             const hashedpassword=user.password;
             const isPasswordmatched=await bcrypt.compare(password,hashedpassword);

             if(isPasswordmatched){
              const token=  jwt.sign({email:email},'secret',{expiresIn:"1h"});
         
               res.cookie("jwt", token,{
                httpOnly: true,
                sameSite: "lax", 
                secure: false,
                path:"/",
                 
               });
                
                  res.status(200).json({message:"logged in successfully",redirectURL:`${process.env.BackEnd_URL}/zerodha/dashboard`});
                    return;
             }else{
                  res.status(400).json({message:"Wrong password or mail"});
                     return;
             }

         }
         catch(e){
              res.status(500).json({message:`Some internal error occured ${e}`});
         }

         


        
}


const signup=async(req,res)=>{
        
          const{username,email,password}=req.body;

          try{ 
          console.log(username);

          const existinguser=await userModel.findOne({email:email});
        

        
            if(existinguser){
          
            res.status(400).json({message:"User is already registered with this email"});
            return;
          }
         
         
          const hashedpassword=await bcrypt.hash(password,saltRounds);
         
          const newUser=new userModel({
            username:username,
            email:email,
            password:hashedpassword,
          });
           
          await newUser.save();
          
          res.status(200).json({message:"User registered successfully"});
         



        }catch(e){
         
             res.status(500).json({error:`Some error occured ${e}`});
        }

          
}

const logout=(req,res)=>{
const token=req.cookies.jwt;
//console.log(token);
       if(token){
        res.clearCookie("jwt", {
    httpOnly: true,
    secure: true,     // HTTPS required
    sameSite: "none", // needed if frontend and backend are on different domains
    path: "/",
});

         res.status(200).json({message:"User logged out successfully",url:`${process.env.FrontEnd_URL}`});
         return;
       }


      res.status(400).json({message:"Please login first"});
}



module.exports={signup,login,logout};