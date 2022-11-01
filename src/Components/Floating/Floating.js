import React from 'react'
import './Floating.css'

const Floating = ({ image, text1, text2 }) => {
  return (
    <div>
      <div className='floating'>
        <img src={image} alt='' />
        <span>
          {text1}
          <br></br>
          {text2}
        </span>
      </div>
    </div>
  )
}

export default Floating
