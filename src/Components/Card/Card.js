import React from 'react'
import './Card.css'

const Card = ({ image, title, description }) => {
  return (
    <div className='full-card '>
      <div className='card w-80 h-80 bg-base-100 shadow-2xl border-4 border-accent '>
        <figure className='mt-[-24px]'>
          <img src={image} alt={title} className='' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title mt-[-50px]'>{title}</h2>
          <p className=''>{description}</p>
          <div className='card-actions'>
            <button className='btn text-primary bg-white hover:bg-white'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
