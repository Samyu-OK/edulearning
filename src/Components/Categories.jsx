import React from 'react'
import '../Components/Cato.css'
import room from '../Assets/class.png'
import studies from '../Assets/online.png'
import collab from '../Assets/workspace.png'
import laptop from '../Assets/laptop.png'

export default function Categories() {
  return (
    <div>
  <div className="cato">
    <h2 className="cat-title">Categories</h2>
    <h1 className="core">Courses Categories</h1>
  </div>

  <div className="gallery">
    <div className="photo1">
      <img src={room} alt="class" />
      <h2 className="img-text">Web design | 50 courses</h2>
    </div>

    <div className="photo2">
      <img src={collab} alt="collab" />
      <h2 className="img-text">Online Marketing | 20 courses</h2>
    </div>

    <div className="photo3">
      <img src={laptop} alt="laptops" />
      <h2 className="img-text">Grapic design | 35 courses</h2>
    </div>

    <div className="photo4">
      <h2 className="img-text">Video editing | 25 courses</h2>
      <img src={studies} alt="study" />
    </div>
  </div>
</div>

  )
}
