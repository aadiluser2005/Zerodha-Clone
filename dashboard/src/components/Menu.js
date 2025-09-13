import { Dashboard, Token } from "@mui/icons-material";
import React, { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
const Menu = () => {


 
  const [selectedMenu,setSelectedMenu]=useState(0);
  
   
   const[open,setOpen]=useState(false);
   const [message,setMessage]=useState("");

   const handleClose=()=>{
    setOpen(false);
  }

  const action =(<IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>);
   

   const handleMenuClick=(index)=>{
    
    setSelectedMenu(index);
   }
   const handlelogout=async()=>{
    const backendURL=process.env.Backend_URL;
       try {
         const res= await axios.get(`${backendURL}/zerodha/logout`,{withCredentials:true});
         
         if(res.status===200){

           setMessage(res.data.message);
          setOpen(true);
          setInterval(()=>{
              window.location.href=res.data.url;
          },1000);
         
         
         }

       } catch (error) {
            console.log(`Error occured ${error}`);
            console.log(error.response.data.message);
       }
   }


  

   const menuClass="menu";
   const activeMenuClass="menu selected";
  return (
    <>
    <div className="menu-container">     
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
         
        <ul>
          <li> 
            <Link style={{textDecoration:"none"}} to={"/"} onClick={ ()=>handleMenuClick(0)}>
            <p className={selectedMenu===0?activeMenuClass:menuClass}>  Dashboard</p>
            </Link>
          </li>
          <li>
              <Link style={{textDecoration:"none"}} to={"/orders"} onClick={()=>handleMenuClick(1)}>
            <p className={selectedMenu===1?activeMenuClass:menuClass}>    Orders</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to={"/holdings"} onClick={()=>handleMenuClick(2)}>
            <p className={selectedMenu===2?activeMenuClass:menuClass}>    Holdings</p>
            </Link>
          </li>
          
          <li>
              <Link style={{textDecoration:"none"}} to={"/positions"} onClick={()=>handleMenuClick(3)}>
            <p className={selectedMenu===3?activeMenuClass:menuClass}>    Positions</p>
            </Link>
          </li>
          <li>
              <Link style={{textDecoration:"none"}} to={"/funds"} onClick={()=>handleMenuClick(4)}>
            <p className={selectedMenu===4?activeMenuClass:menuClass}>    Funds</p>
            </Link>
          </li>
         
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username"  onClick={handlelogout}>LogOut</p>
        </div>

      </div>
       
       <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
        action={action}
         anchorOrigin={{ vertical: "top", horizontal: "right" }}
          ContentProps={{
        sx: {
          backgroundColor: "white",
          color: "black",
         border: "1px solid #ccc",
         borderRadius: "8px",
        }
        }}
       
      />
    </div>
    
    <div className="DropdownMenu d-md-none">
         <img src="logo.png"  />
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Menu
  </button>
  <ul class="dropdown-menu">
     <li className="options"> 
            <Link style={{textDecoration:"none"}} to={"/"} onClick={ ()=>handleMenuClick(0)}>
            <p className={selectedMenu===0?activeMenuClass:menuClass}>  Dashboard</p>
            </Link>
          </li>
          <li  className="options">
              <Link style={{textDecoration:"none"}} to={"/orders"} onClick={()=>handleMenuClick(1)}>
            <p className={selectedMenu===1?activeMenuClass:menuClass}>    Orders</p>
            </Link>
          </li>
          <li  className="options">
             <Link style={{textDecoration:"none"}} to={"/holdings"} onClick={()=>handleMenuClick(2)}>
            <p className={selectedMenu===2?activeMenuClass:menuClass}>    Holdings</p>
            </Link>
          </li>
          
          <li  className="options">
              <Link style={{textDecoration:"none"}} to={"/positions"} onClick={()=>handleMenuClick(3)}>
            <p className={selectedMenu===3?activeMenuClass:menuClass}>    Positions</p>
            </Link>
          </li>
          <li  className="options">
              <Link style={{textDecoration:"none"}} to={"/funds"} onClick={()=>handleMenuClick(4)}>
            <p className={selectedMenu===4?activeMenuClass:menuClass}>    Funds</p>
            </Link>
          </li>
          <li className="options">
             <p   onClick={handlelogout}>Logout</p>
          </li>
  </ul>
</div>

    </div>
    </>
  );
};

export default Menu;