import React from 'react'
import '../Components/Courses.css'

export default function Coursess({priceimg,pricetitle,pricepara,pricebtn}) {
  return (
    <div className="price-card">
        <img src={priceimg} className="prices-images" alt="images"></img>
      <h3 className='price-title'>{pricetitle}</h3>
      <p className='price-para'>{pricepara}</p>
      <button>{pricebtn}</button>
      <div className='price-side'>
        <p> <ion-icon name="time-outline"></ion-icon>  1.49 hrs</p>
        <p> <ion-icon name="people-outline"></ion-icon> 30 Students</p>
      </div>
    </div>
  )
}

