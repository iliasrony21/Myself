import React from 'react'
import './Info.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import rony from '../../img/rony.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glass from '../../img/glassesimoji.png'
import Floating from '../Floating/Floating'

const Info = () => {
  return (
    <div>
      <div className='total-part flex mt-32 ml-24'>
        <div className='left-part gap-2 flex-1'>
          <span className='text-5xl font-bold text-blakish mb-25'>
            Hi Everyone!! I am{' '}
          </span>
          <br />
          <br />
          <span className='pt-5 text-5xl font-bold text-primary '>
            MD.Ilias Ahomed(Rony)
          </span>
          <p className='mt-5 mb-5 '>
            Hello Everyone,I am a Frontend Developer.I am a fresher in this
            field.I want to become a good and qualityful web Developer.
          </p>
          <button className='button w-40 h-12'>Hire me</button>
          <div className='flex mt-32'>
            <img className='h-12 mr-8' src={github} alt='' />
            <img className='h-12 mr-8' src={linkedin} alt='' />
            <img className='h-12 mr-8' src={instagram} alt='' />
          </div>
        </div>
        <div className='right-part flex-1'>
          <img src={vector1} alt='' />
          <img src={vector2} alt='' />
          <img src={rony} alt='' />
          <img src={glass} alt='' />
          <div className='ml-96 mt-8'>
            <Floating
              image={crown}
              text1={'web'}
              text2={'Developer'}
            ></Floating>
          </div>
          <div className='mt-96 pt-10 ml-20'>
            <Floating
              image={thumbup}
              text1={'Best perform'}
              text2={'Design'}
            ></Floating>
          </div>
          {/* blur div  */}
          <div
            className='blur'
            style={{ background: 'rgb(238 210 255)' }}
          ></div>
          <div
            className='blur'
            style={{
              background: '#C1F5FF',
              top: '22rem',
              width: '21rem',
              height: '11rem',
              left: '-9rem'
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Info
