import React from 'react'
import './Header.css'
export default function Herobutton({note}) {
  return (
    <div>
        <button className='hero-button'>{note}</button>
    </div>
  )
}
