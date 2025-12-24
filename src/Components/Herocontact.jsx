import React from 'react'
import '../Components/Herocontact.css';
import heros from '../Assets/platform.png';
export default function Herocontact({herosections}) {
  return (
    <div>
        <div>
          <img src={heros} alt="hero-contact" className='hero-img'></img>
          <div className='contact-text'>
            <h1 className='contact-head'>{herosections}</h1>
            <p className='pages'>Home / Courses / Contact</p>
          </div>
          </div>
    </div>
  )
}
