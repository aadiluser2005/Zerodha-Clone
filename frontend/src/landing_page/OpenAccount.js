import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function OpenAccount() {
   const navigate=useNavigate();
   const handleRedirect=()=>{
    navigate("/signup");
  }
  return (
    <div className='container text-center mt-5'>
      <h1>Open a Zerodha account</h1>
      <p>Modern platforms and apps, &#8377;0 investments, and and flat &#8377;20 intraday and F&O trades.</p>
       <button type="button" className="btn btn-primary  p-1 fs-5 mt-2 landing-btn"  onClick={handleRedirect} >Signup Now</button>
    </div>
  )
}
