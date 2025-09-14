const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const dotenv =require("dotenv");
dotenv.config();
const URL=process.env.MONGO_URL;
const port=process.env.PORT||8000;



const {userRoutes}=require("./routes/user.routes.js");
const cookieParser=require("cookie-parser");
const {authMiddleware}=require("./utils/authMiddleware.js");
const {dashboardRoutes}=require("./routes/dashboard.routes.js");



app.use(cors({
  origin:["https://zerodha-clone-1-oul9.onrender.com","https://zerodha-clone-vvnx.onrender.com"],
  credentials: true              
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));









 
app.use("/zerodha",userRoutes);
app.use("/zerodha/dashboard",authMiddleware,dashboardRoutes);



app.listen(port,()=>{
     mongoose.connect(URL);
     console.log("DB connected");
    console.log(`app is listening on port ${port}`);
});
