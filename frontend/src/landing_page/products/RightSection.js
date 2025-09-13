import React from 'react'

export default function RightSection({productName,productDescription,learnMore,productImageSource}) {
  return (
    <div className='rightSection container border-bottom '>
      <div className='row'>
        <div className='col-12 col-md-6 mt-5'>
          <h1 className='mt-5'>{productName}</h1>
          <p className='text-muted mb-5'>{productDescription}</p>
          <a href={learnMore} >Learn More <i class="fa-solid fa-arrow-right"></i></a>
        </div>
          <div className='col-12 col-md-6 '>
            <img src={productImageSource} style={{width:"100%"}}></img>
          </div>
      </div>
      
    </div>
  )
}
