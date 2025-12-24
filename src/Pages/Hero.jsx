import React from 'react'
import heroimg from '../Assets/platform.png'
import './Hero.css'
import Herobutton from '../Components/Herobutton';


export default function Hero() {
  return (
    <div>
        <div className="hero">
            <img src={heroimg} alt="hero" className="hero-image"/>
    
            <div className="hero-text">
                <h1 className='head-title'>Welcome to EduLearn</h1>
                <h2 className='heading'>Best Online learning Platform</h2>
                <p className='para1'>Your journey to knowledge starts here. Explore our wide range of courses and enhance your skills today!</p>
                <p className='para2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quis, eligendi laborum, ratione dolor optio alias et cupiditate necessitatibus, asperiores</p>
                 <div className="hero-btns">
                 <Herobutton note="Read More"/>
                 <button className='hero-buttons'>Join Now</button>
                 
                 </div>
            </div>

        </div>

    </div>
  )
}
