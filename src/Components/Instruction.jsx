import React from 'react'
import '../Components/Instruct.css'
export default function Instruction({inimg,intitle,inpara}) {
  return (
       <div className="in-card">
        <img src={inimg} className="in-images" alt="images"></img>
      <h3 className='ins-title'>{intitle}</h3>
      <p className='ins-para'>{inpara}</p>
      <div className='ins-side'>
        <p><ion-icon name="logo-facebook"></ion-icon> </p>
        <p><ion-icon name="logo-twitter"></ion-icon> </p>
        <p><ion-icon name="logo-instagram"></ion-icon> </p>
       
        
      </div>
    </div>
    
  )
}
