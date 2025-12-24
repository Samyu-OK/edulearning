import React from 'react'
import '../Components/Footer.css';
import Herobutton from './Herobutton';
export default function Footer() {
  return (
    <div className='bg'>
    <div className='footers'>
       <div className='links'>
        <h2 className='footer-head'>Quick Link</h2>
        <p><ion-icon name="chevron-forward-outline"></ion-icon>About Us</p>
        <p><ion-icon name="chevron-forward-outline"></ion-icon>Contact Us</p>
        <p><ion-icon name="chevron-forward-outline"></ion-icon>Privacy Policy</p>
        <p><ion-icon name="chevron-forward-outline"></ion-icon>Terms & Condition</p>
        <p><ion-icon name="chevron-forward-outline"></ion-icon>FAQ's & Help</p>
       </div>
       <div className='cont'>
        <h2 className='footer-head'>Contact</h2>
        <p><ion-icon name="location-outline"></ion-icon> 123 Street, Chennai, India</p>
        <p><ion-icon name="call-outline"></ion-icon> +91 9872654310</p>
        <p><ion-icon name="mail-outline"></ion-icon> info@edulearn.com</p>
        <div className='iconics'>
           <ion-icon name="logo-twitter"></ion-icon>
           <ion-icon name="logo-facebook"></ion-icon>
           <ion-icon name="logo-youtube"></ion-icon>
           <ion-icon name="logo-linkedin"></ion-icon>
        </div>
       </div>
       <div className='galleries'>
        <h2 className='footer-head'>Gallery</h2>
        <p><ion-icon name="chevron-forward-outline"></ion-icon> Full stack development</p>
        <p><ion-icon name="chevron-forward-outline"></ion-icon> Web design</p>
        <p><ion-icon name="chevron-forward-outline"></ion-icon> Video editing</p>
        <p><ion-icon name="chevron-forward-outline"></ion-icon> Online Marketing</p>
        <p><ion-icon name="chevron-forward-outline"></ion-icon> Data Analytics</p>

       </div>

       <div className='news'>
        <h2 className='footer-head'>Newsletter</h2>
        <p>lorem epsum dho ajk aeukqhwoiu wahoqi</p>
        <div className='btns'>
        <input className='in-news' placeholder='Your E-mail'></input>
        <Herobutton note={"Sign Up"}/>
        </div>
       </div>
       </div>
         <div className='line'>
            ©2025 Edulearn. All Rights Reserved. 
         </div>
         
    </div>
  )
}
