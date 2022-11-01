import React from 'react'
import Card from '../Card/Card'
import './Services.css'
import heart from '../../img/heartemoji.png'
import glassemoji from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Resume from './realcv.pdf'
const Services = () => {
  return (
    <div className='Total-part flex mt-56 ml-24'>
      <div className='left-side'>
        <div className='myawesome'>
          <span className='text-5xl font-bold'>My Awesome</span>
          <br />
          <br />
          <span className='text-5xl text-primary font-bold '>Services</span>
          <p className='mt-2 mb-5'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate{' '}
            <br />
            esse, ad odio minus nihil, officia necessitatibus provident atque
          </p>

          <a href={Resume} download>
            <button className='button mt-20 '>Download CV</button>
          </a>

          <div
            className='blur2'
            style={{
              background: 'rgb(238 210 255)',
              top: '52rem',
              width: '23rem',
              height: '21rem',
              left: '69rem'
            }}
          ></div>
          <div
            className='blur2'
            style={{
              background: '#C1F5FF',
              top: '72rem',
              width: '23rem',
              height: '21rem',
              left: '-9rem'
            }}
          ></div>
        </div>
      </div>
      <div className='right-side'>
        <div className='cards '>
          <Card
            image={heart}
            title={'Design'}
            description={'Figma,Adobe illustrator,photoshop,Adobe Xd etc'}
          ></Card>
        </div>
        <div className='cards2 '>
          <Card
            image={glassemoji}
            title={'Developer'}
            description={`HTML,CSS,Bootstrap,Tailwind,jQuery
            ,JavaScript,React js,Node js,  Express js,MongiDb`}
          ></Card>
        </div>
        <div className='cards3 '>
          <Card
            image={humble}
            title={'UI/UX'}
            description={
              ' Explore the role of wireframes in projects, wireframe elements and their resources.'
            }
          ></Card>
        </div>
      </div>
    </div>
  )
}

export default Services
