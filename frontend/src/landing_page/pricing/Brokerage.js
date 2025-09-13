import React from 'react'

export default function Brokerage() {
  return (
       <div className='container mt-5 border-top'>
        <div className='row mt-5'>
         
            <div className='col-12 col-md-8'>
               <a className='text-center ' style={{textDecoration:"none"}} ><h3>Brokerage calculator</h3></a>
              <ul className='mt-5  'style={{lineHeight:"2.25",fontSize:"15px"}}>
                 <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
              </ul>
            </div>
              <div className='col-12 col-md-4'>
                  <a className='text-center ' style={{textDecoration:"none"}} ><h3>List of charges</h3></a>
              
              </div>
        </div>
       </div>
  )
}
