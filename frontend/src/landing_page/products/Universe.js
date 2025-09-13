import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Universe() {
  const navigate=useNavigate();
   const handleRedirect=()=>{
    navigate("/signup");
   }
  return (
    <div className='container mt-5'>
      <div className='row text-center'>
        <p className='mb-5'>Want to know more about out technology stack? Check out the Zerodha.tech blog</p>
        <h1 className='mt-1'>The Zerodha Universe</h1>
        <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
      </div>

      <div className='row'>
          <div className='col-12 col-md-4 p-3 mt-5 text-center'>
            <img src='media\images\smallcaseLogo.png'></img>
            <p className='text-small text-muted mt-3'>Thematic investment platform</p>
          </div>
         <div className='col-12 col-md-4 mt-5 text-center'>
            <img src='media\images\streakLogo.png' style={{width:"50%"}}></img>
            <p className='text-small text-muted mt-3'>Algo & strategy platform</p>
          </div>
           <div className='col-12 col-md-4 p-3 mt-5 text-center'>
            <img src='media\images\sensibullLogo.svg' style={{width:"200px"}}></img>
            <p className='text-small text-muted mt-3'>Options trading platform</p>
          </div>

          <div className='col-12 col-md-4 p-3 mt-5 text-center'>
            <img src='media\images\zerodhaFundhouse.png'  style={{width:"60%"}}></img>
            <p className='text-small text-muted mt-3'>Asset management</p>
          </div>
         <div className='col-12 col-md-4 p-3 mt-5 text-center'>
            <img src='media\images\goldenpiLogo.png' style={{width:"50%"}}></img>
            <p className='text-small text-muted mt-3'>Bonds trading platform</p>
          </div>
           <div className='col-12 col-md-4 p-3 mt-5 text-center'>
            <img src='media\images\dittoLogo.png ' className='dittoLogo' ></img>
            <p className='text-small text-muted mt-3'>Insurance Company</p>
          </div>
         <button type="button" className="btn btn-primary  p-1 fs-5 mt-3 landing-btn" onClick={handleRedirect} >Signup Now</button>
             
             
      </div>
     
    </div>)
}
