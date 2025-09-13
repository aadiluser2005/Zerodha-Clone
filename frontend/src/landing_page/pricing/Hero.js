import React from 'react'


export default function Hero() {
    
  return (
   <div className='container mt-4  '>
    <div className='row text-center border-bottom p-5'>
       <h1>Pricing</h1>
       <h5 className='mt-4 text-muted'>Free equity investments and flat &#8377;20 intraday and F&O trades. </h5>
    </div>

    <div className='row text-center'>
      <div className='col-12 col-md-4 p-5'>
        <img src='media\images\pricing0.svg'></img>
        <h3>Free equity delivery</h3>
        <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>

      </div>
        <div className='col-12 col-md-4 p-5'>
            <img src='media\images\intradayTrades.svg' ></img>
        <h3>Intraday and F&O trades</h3>
           <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
          <div className='col-12 col-md-4 p-5'>
              <img src='media\images\pricingMF.svg'></img>
        <h3>Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
          </div>
    </div>
   </div>
  )
}
