import React from 'react'
import '../Components/Box.css' 
export default function Box({icons, title, text}) {
  return (
    
    
            <div className='boxs'>

                <section className='box-text'>
                <h2 className='icons'>{icons}</h2>

                <h3 className='box-heading'>{title}</h3>
                <p>{text}</p>
                </section>
            </div>
            
        

  )
};
