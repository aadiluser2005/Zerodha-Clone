import React from 'react'
import { useNavigate } from "react-router-dom";


export default function Hero() {

  const navigate=useNavigate();
   
  const handleRedirect=()=>{
    navigate("/signup");
  }

  return (
  
   <div className='container-fluid p-5 mb-5 '>
          <div className='row text-center '>
           
             
                <div className='col-12 heroImage'>
                  
                      <img src='media/images/homeHero.png' alt='Hero Image' className='img-fluid'></img>
              </div>          
                <div>
                <h1 className='mt-5 invest-heading'>Invest in everything</h1>
                <p className='invest-para' >Online platform to invest in stocks, derivatives, mutual funds, and more </p>
                <button type="button" className="btn btn-primary  p-1 fs-5 landing-btn " onClick={handleRedirect}>Signup Now</button>
                 </div>
                
           
               
          </div>
    </div>
 
  )
}
