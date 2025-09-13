import React from 'react'

export default function LeftSection({imageSource,productName,productDescription,tryDemo,learnMore,googlgePlay,appleStore}) {
  return (
     <div className='container mt-5 border-bottom '>
      <div className='row'>
        <div className='col-12 col-md-6 p-5'>
           <img src={imageSource} className='leftsectionImage'></img>
        </div>
          <div className='col-12 col-md-6   p-5 leftSectionDescription '> 
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div className='mt-5 leftSectionLinks'>
            <a href={tryDemo} className='firstLink' >Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} className='secondLink' >Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div  className='mt-5 leftSectionLogo'>
                <a href={googlgePlay} className='googlePlayIcon'><img src='media\images\googlePlayBadge.svg'></img></a>
                 <a href={appleStore}><img src='media\images\appstoreBadge.svg '></img></a>
            </div>
          </div>
      </div>
    
     </div>
  )
}
