import React from 'react'

export default function Stats() {
  return (
    <div className='container p-5'>
    <div className='row mt-5 '>
      <div className='col-12 col-md-6 statsContent'>
         <h1  className='fs-2'>Trust with confidence</h1>

      
          <h2 className='fs-4 mt-5'>Customer-first always</h2>
          <p  className='text-muted'>That's why 1.3+ crore trust Zerodha with &#8377;3.5+ lakh crores worth of equity investments.</p>


          
          <h2  className='fs-4 mt-4'>No spam or gimmicks</h2>
          <p  className='text-muted'>No gimmicks, spam, "gammification", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>
         

          
          <h2  className='fs-4 mt-4'>The Zerodha universe </h2>
          <p  className='text-muted'>Not just app but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
         

          
          <h2  className='fs-4 mt-4'>Do better with money</h2>
          <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money</p>

      </div>
      <div className='col-12 col-md-6'style={{marginTop:"75px"}} >
      
         <img src='media\images\ecosystem.png'  alt='Ecosystem image' className='ecosystem-image' style={{width:"100%"}}></img>
        <div className='mt-5 statsLink'>
       
          <a href='' className='' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
          <a href='' className='' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
         </div>
       
      </div>
       
    </div>
    </div>
  );
}
