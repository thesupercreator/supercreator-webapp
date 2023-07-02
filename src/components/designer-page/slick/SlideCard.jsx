import React from 'react'
import './Carousel.css'
import FooterForCards from '../Footer/FooterForCards.jsx'

function SlideCard({number}) {
  return (
    <main className='slide-render'>
        <div className='card-number'>
            <div className='cirlce'>
                <h1>{number}</h1>
            </div>
        </div>
        <div className='slide-title'>
            <h1>You would read this first</h1>
        </div>
        <div className='slide-subtitle'>
            <h3 className='subtitle-text'>You would read this last</h3>
        </div>
        <FooterForCards/>
    </main>
  )
}

export default SlideCard