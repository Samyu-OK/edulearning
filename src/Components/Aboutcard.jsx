import React from 'react'
import right from '../Assets/study.png'
import '../Components/Aboutcard.css'
import Herobutton from './Herobutton'

export default function Aboutcard() {
  return (
    <div>
        <section className='abouts'>
            <img src={right} className='rightside' alt="study"></img>
            <div className='leftside'>
                <h2 className='head-title'>About Us</h2>
                <h3 className='para'>Learn Anytime, Anywhere!</h3>
                <p className='paras1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className='paras2'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                <div className='lists'>
                    <ul>
                    <li>Skilled Instructors</li>
                    <li>International Certificate</li>
                    <li>Online Classes</li>
                    <li>Affordable Fees</li>
                    
                </ul>
                <ul>
                    <li>Skilled Instructors</li>
                    <li>International Certificate</li>
                    <li>Online Classes</li>
                    <li>Affordable Fees</li>
                    
                </ul>
                </div>
               <div className='learn'>
                 <Herobutton note="Learn More"/>
               </div>
            </div>


        </section>
    </div>
  )
}
