import React from 'react'
import Herocontact from '../Components/Herocontact';
import Box from '../Components/Box';
import schoolIcon from '../Assets/school-outline.svg';
import globeIcon from '../Assets/globe-outline.svg';
import homeIcon from '../Assets/home-outline.svg';
import bookIcon from '../Assets/book-outline.svg';
import Aboutcard from '../Components/Aboutcard';
import Instruction from '../Components/Instruction';
import teacher1 from '../Assets/teach1.png';
import teacher2 from '../Assets/teach2.png';
import teacher3 from '../Assets/teach4.png';
import teacher4 from '../Assets/teach3.png';
import Footer from '../Components/Footer';

export default function About() {
  return (
    <div>
      <Herocontact herosections={"About"}/>
      <div className='boxes'>
            <Box icons={<img src={schoolIcon} alt="school" />} title="card" text=" lorem ipsum dolor sit amet, consectetur adipiscing elit. agvjhfvjy"></Box>
            <Box icons={<img src={globeIcon} alt="school" />} title="card" text=" lorem ipsum dolor sit amet, consectetur adipiscing elit. agvjhfvjy"></Box>
            <Box icons={<img src={homeIcon} alt="school" />} title="card" text=" lorem ipsum dolor sit amet, consectetur adipiscing elit. agvjhfvjy"></Box>
            <Box icons={<img src={bookIcon} alt="school" />} title="card" text=" lorem ipsum dolor sit amet, consectetur adipiscing elit. agvjhfvjy"></Box>
            </div>
      <Aboutcard/>
      <div className="instructs">
            <h2 className="in-title">Instructors</h2>
            <h1 className="members">Expert Instructors</h1>
            <div className='instruct'>
            <Instruction inimg={teacher1} intitle={"Instructor"} inpara={"John Doe"}/>
            <Instruction inimg={teacher2} intitle={"Mentor"} inpara={"Sarah"}/>
            <Instruction inimg={teacher3} intitle={"Trainer"} inpara={"Watson"}/>
            <Instruction inimg={teacher4} intitle={"Instructor"} inpara={"Alice"}/>
            </div>
            </div>
            <Footer/>
    </div>
  )
}
