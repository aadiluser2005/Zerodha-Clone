const jwt=require("jsonwebtoken");
const {userModel}=require("../model/userModel");


const authMiddleware = (req, res, next) => {
// console.log("Cookies received:", req.cookies); 
  // To get your token:
  const token = req.cookies.jwt;
//console.log("jwt:", token);



  if (!token){
     return res.status(401).json({ message: "Not authorized" });
  }

  jwt.verify(token, `secret`, (err, user) => {
    if (err){ 
     return res.status(403).json({ message: "Invalid token" });
    } 
    //console.log(user);
    req.user = user;
    next();
  });
 

};

module.exports={authMiddleware};