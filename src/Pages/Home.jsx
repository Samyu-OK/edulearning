import React from 'react'
import Hero from './Hero.jsx'
import Menubars from '../Components/Headers.jsx'
import Box from '../Components/Box.jsx'
import Aboutcard from '../Components/Aboutcard.jsx';
import schoolIcon from '../Assets/school-outline.svg';
import globeIcon from '../Assets/globe-outline.svg';
import homeIcon from '../Assets/home-outline.svg';
import bookIcon from '../Assets/book-outline.svg';
import Categories from '../Components/Categories.jsx';
import Coursess from '../Components/Coursess.jsx';
import online1 from '../Assets/onlin1.jpg';
import online3 from '../Assets/onlin2.jpg';
import laptop from '../Assets/laptop.png';
import Instruction from '../Components/Instruction.jsx';
import teacher1 from '../Assets/teach1.png';
import teacher2 from '../Assets/teach2.png';
import teacher3 from '../Assets/teach4.png';
import teacher4 from '../Assets/teach3.png';
import Test from '../Components/Test.jsx';
import students1 from '../Assets/student1.png';
import students2 from '../Assets/student2.png';
import students3 from '../Assets/student3.png';
import Footer from '../Components/Footer.jsx';



export default function Home() {
  return (
    <div>
      <Menubars />
      <Hero />
      <div className='boxes'>
      <Box icons={<img src={schoolIcon} alt="school" />} title="card" text=" lorem ipsum dolor sit amet, consectetur adipiscing elit. agvjhfvjy"></Box>
      <Box icons={<img src={globeIcon} alt="school" />} title="card" text=" lorem ipsum dolor sit amet, consectetur adipiscing elit. agvjhfvjy"></Box>
      <Box icons={<img src={homeIcon} alt="school" />} title="card" text=" lorem ipsum dolor sit amet, consectetur adipiscing elit. agvjhfvjy"></Box>
      <Box icons={<img src={bookIcon} alt="school" />} title="card" text=" lorem ipsum dolor sit amet, consectetur adipiscing elit. agvjhfvjy"></Box>
      </div>
      <Aboutcard/>
      <Categories/>
      <div className="course">
      <h2 className="co-title">Courses</h2>
      <h1 className="cour">Popular Courses</h1>

      <div className="course-price">
       <Coursess priceimg={online1} pricetitle={"React Development"} pricepara={"lorem uyethsg qhjstui vnnjaliuoi oiuehjdnb haytim"} pricebtn={"Join Now"}/>
       <Coursess priceimg={laptop} pricetitle={"Java Full Stack Development"} pricepara={"lorem uyethsg qhjstui vnnjaliuoi oiuehjdnb haytim"} pricebtn={"Join Now"}/>
       <Coursess priceimg={online3} pricetitle={"Python Full Stack Development"} pricepara={"lorem uyethsg qhjstui vnnjaliuoi oiuehjdnb haytim"} pricebtn={"Join Now"}/>
      </div>
      </div>
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

      <div className="tests">
      <h2 className="test-title">Testimonial</h2>
      <h1 className="tests-head">Our Students Say!</h1>
       <div className='test-box'>
        <Test testimg={students1} testtitle={"Mirah"} testpara={"Student"} testtext={"lorem epsum jkiwn gatfhwjqwg qwhsgqjywguqtew qwytewiurt  nasbkdja  jhkuy jgjh xdst ug.uy yf tyo hbwqg uqwgiu  2uwq   wugiu  nvdGD JKAgsd ASIu bj yhfu yf yfuyf fyumf yvhjfuyf"}/>
        <Test testimg={students2} testtitle={"Michael"} testpara={"Student"} testtext={"lorem epsum jkiwn gatfhwjqwg qwhsgqjywguqtew qwytewiurt  nasbkdja  jhkuy jgjh xdst ug.uy yf tyo hbwqg uqwgiu  2uwq   wugiu  nvdGD JKAgsd ASIu bj yhfu yf yfuyf fyumf yvhjfuyf"}/>
        <Test testimg={students3} testtitle={"Anna"} testpara={"Student"} testtext={"lorem epsum jkiwn gatfhwjqwg qwhsgqjywguqtew qwytewiurt  nasbkdja  jhkuy jgjh xdst ug.uy yf tyo hbwqg uqwgiu  2uwq   wugiu  nvdGD JKAgsd ASIu bj yhfu yf yfuyf fyumf yvhjfuyf"}/>
       </div>
      </div>
      <Footer/>
    </div>

  );
}
