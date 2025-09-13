import React from 'react'

export default function Education() {
  return (
    <div className='container mt-5 '>
         <div className='row'>
          <div className='col-12 col-md-6'>
            <img src='media\images\education.svg' className=' varsityImage'></img>
          </div>
          <div className='col-12 col-md-6 p-5'>
              <h3 > Free and open market education</h3>
              <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
              <a href='' className='me-5' style={{textDecoration:"none"}}>Versity<i class="fa-solid fa-arrow-right"></i></a>

              <p className='mt-5'> Trading Q&A, the most active trading and investment community in India for all your market queries.</p>
              <a href='' className='me-5' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
          </div>
         </div>
    </div>
  )
}
