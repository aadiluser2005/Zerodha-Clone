import React from 'react'

export default function Hero() {
  return (
    <div  id='supportHero' >
 
    <div  className=' container py-3' id='supportWrapper'>
          <h5 >Support Portal</h5>
             <a  style={{textDecoration:"none",color:"white"}}> Track Tickets</a>
       </div>

       <div className='row  '>
        <div className='col-12 col-md-6 ' id='inputWrapper'>
          <h3>Search for an answer or browse help topics to create a ticket</h3>
          <input  placeholder='"Eg:how do I activate F&O, why is my order rejected...' id='inputField'></input> <br></br>
           <a href=''>Track account opening</a>
           <a  href=''>Track segnment activation</a>
            <a  href=''>Intraday margins</a>
             <a  href='' >Kite user manual</a>
        </div>
         <div className='col-12 col-md-6 featureDiv' >
            <h3>Featured</h3>
            <ol>
              <li>
                <a href='' style={{color:'white'}}>Current Takeovers and Delisting - January 2024</a>
              </li>
               <li>
                <a href=''  style={{color:'white'}}>Latest Intraday leverages</a>
              </li>
            </ol>
         </div>
       </div>
      
  
  </div>
  )
}




