import React from 'react'

export default function Pricing() {
  return (
    <div className="container">
        <div className='row'>
         <div className='col-12 col-md-4 p-4'>
          <h1>Unbeatable pricing</h1>
          <p className='mt-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href='' className='me-5' style={{textDecoration:"none"}}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
         </div>
           <div className='col-md-2 '></div>
             <div className='col-12 col-md-6 p-4  '>
              <div className='row text-center'>
                  <div className=' col border p-3'>
                      <h1 className='mb-3'> &#8377; 0</h1>
                      <p>Free equity delivery and <br></br> direct mutual funds </p>
               </div>
              <div className=' col border p-3'> 
                <h1  className='mb-3'>&#8377;20</h1>
                <p>Intraday and F&O</p>
              </div>
              </div>
            
              
             </div>
        </div>
    </div>
  )
}
