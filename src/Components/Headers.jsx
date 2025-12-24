import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Herobutton from './Herobutton.jsx'
export default function Menubars() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='headers'>
        <div className="header">
            
            <div className='head-container'>
              <ion-icon 
                name={isMenuOpen ? "close-outline" : "menu-outline"} 
                className="menu-icon"
                onClick={toggleMenu}
              ></ion-icon>
                <img src="/global-education.png" alt="logo" className="logo"/>
                <h2 className='head'>EduLearn</h2>

                <ul className={`navbars ${isMenuOpen ? 'navbars-open' : ''}`}>
                  <li><Link to={"/"} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                  <li><Link to={"/about"} onClick={() => setIsMenuOpen(false)}>About</Link></li>
                  <li><Link to={"/courses"} onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
                  <li><Link to={"/contact"} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                  <Herobutton note="Join Now"/>
                </ul>
                
            </div>


        </div>

    </header>
  )
};
