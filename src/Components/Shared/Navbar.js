import React from 'react'
import './Navbar.css'
import img from '../../img/ilias.png'

const Navbar = () => {
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a href>Home</a>
              </li>
              <li>
                <a href>Services</a>
              </li>
              <li>
                <a href>Experice</a>
              </li>
              <li>
                <a href>Portfolio</a>
              </li>

              <li>
                <a href>Testimonial</a>
              </li>
            </ul>
          </div>
          <div className='avatar'>
            <div className='w-12 ml-5  rounded-full'>
              <img src={img} alt='logo' />
            </div>
          </div>
          <a
            href
            className='btn btn-ghost normal-case text-xl  mr-5 font-extrabold '
          >
            ILIAS
          </a>

          <input
            type='checkbox'
            className='toggle border-primary bg-primary border-solid border-4'
            checked
          />
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0 font-bold'>
            <li>
              <a href>Home</a>
            </li>
            <li>
              <a href> Services</a>
            </li>
            <li>
              <a href>Experience</a>
            </li>
            <li>
              <a href>Portfolio</a>
            </li>

            <li>
              <a href>Testimonial</a>
            </li>
          </ul>
        </div>
        <div className='navbar-end '>
          <button className='btn rounded-full mr-8 button'>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
