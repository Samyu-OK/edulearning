import React from 'react'
import '../Components/Test.css'
export default function Test({testimg,testtitle,testpara,testtext}) {
  return (
    <div className="test-card">
        <img src={testimg} className="test-images" alt="images"></img>
      <h3 className='test-title'>{testtitle}</h3>
      <p className='test-para'>{testpara}</p>
      <div className='test-side'>
        <p>{testtext}</p>
      </div>
    </div>
  )
}
