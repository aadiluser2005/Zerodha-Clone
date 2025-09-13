import React from 'react'

export default function Team() {
  return (
   <div className='container border-top '>
    <h2 className='mt-5 text-center'>People</h2>
    <div className='row'>
      <div className='col-12 col-md-6 mt-3 p-5 text-center readSection'>
        <img src='media\images\nithinKamath.jpg'  style={{borderRadius:"100%", width:"60%"}}></img>
        <h5 className='mt-4 text-muted'>Nithin Kamath</h5>
        <p  className=' text-muted'>Founder, CEO</p>
      </div>
       <div className='col-12 col-md-6 mt-3 p-5 text-muted readSection' style={{lineHeight:"1.8",fontSize:"1.1rem"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /{" "}
            <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
       </div>
    </div>
   </div>
  )
}
