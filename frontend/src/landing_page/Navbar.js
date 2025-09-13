import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [expanded ,setExpanded]=useState(false);
  return (<>
 
    <nav class="navbar navbar-expand-md bg-body-tertiary border-bottom sticky-top">
  <div class="container-fluid navbarContainer">
    <Link class="navbar-brand" to="/">
     <img src="media\images\logo.svg" style={{width:"30%"}}></img>
    </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded={expanded?"true":"false"} aria-label="Toggle navigation" onClick={()=>setExpanded(!expanded)} > 
      <span class="navbar-toggler-icon"></span>
    </button>

      {/* <!-- Desktop User Icon Dropdown --> */}
      <div class="navbar-nav me-5 d-md-flex align-items-center desktopMenu d-sm-none">
       
       
         
            <Link className="nav-link active ms-3 me-3" aria-current="page" to="/signup"  >
                  SignUp/Login
                </Link>

      
            <Link className="nav-link active ms-3 me-3 " to="/about" >
                  About
                </Link>

          <Link className="nav-link active ms-3 me-3" to="/products" >
                  Products
                </Link>

        
           <Link className="nav-link active ms-3 me-3" to="/pricing" >
                  Pricing
                </Link>

          <Link className="nav-link active ms-3 me-3" to="/support" >
                  Support
                </Link>
          
       
      </div>
    </div>
  
</nav>



{/* Mobile Menu Panel (collapses separately, outside navbar) */}
<div className={`collapse  navbar-collapse bg-light border-top d-md-none ${expanded?"show":""} sticky-top `}  id="navbarNavAltMarkup">
  <div className="navbar-nav p-3 ">
    <Link className="nav-link active mb-2" to="/signup" onClick={()=>setExpanded(false)}  >
      SignUp/Login
    </Link>
    <Link className="nav-link active mb-2" to="/about"  onClick={()=>setExpanded(false)}  >
      About
    </Link>
    <Link className="nav-link active mb-2" to="/products"  onClick={()=>setExpanded(false)}  >
      Products
    </Link>
    <Link className="nav-link active mb-2" to="/pricing"  onClick={()=>setExpanded(false)} >
      Pricing
    </Link>
    <Link className="nav-link active mb-2" to="/support"  onClick={()=>setExpanded(false)}  >
      Support
    </Link>
  </div>
</div>
</>
  );
}
