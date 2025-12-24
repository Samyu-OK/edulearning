import React from 'react'
import Herocontact from '../Components/Herocontact';
import Categories from '../Components/Categories';
import Coursess from '../Components/Coursess.jsx';
import online1 from '../Assets/onlin1.jpg';
import online3 from '../Assets/onlin2.jpg';
import laptop from '../Assets/laptop.png';
import Footer from '../Components/Footer.jsx';
import students1 from '../Assets/student1.png';
import students2 from '../Assets/student2.png';
import students3 from '../Assets/student3.png';
import Test from '../Components/Test.jsx';
import schoolIcon from '../Assets/school-outline.svg';
import globeIcon from '../Assets/globe-outline.svg';
import homeIcon from '../Assets/home-outline.svg';
import bookIcon from '../Assets/book-outline.svg';
import Box from '../Components/Box.jsx';

export default function Courses() {
  return (
    <div className='courses-list'>
      <Herocontact herosections={"Courses"}/>
      <div className='boxes'>
                 <Box icons={<img src={schoolIcon} alt="school" />} title="card" text=" lorem ipsum dolor sit amet, consectetur adipiscing elit. agvjhfvjy"></Box>
                 <Box icons={<img src={globeIcon} alt="school" />} title="card" text=" lorem ipsum dolor sit amet, consectetur adipiscing elit. agvjhfvjy"></Box>
                 <Box icons={<img src={homeIcon} alt="school" />} title="card" text=" lorem ipsum dolor sit amet, consectetur adipiscing elit. agvjhfvjy"></Box>
                 <Box icons={<img src={bookIcon} alt="school" />} title="card" text=" lorem ipsum dolor sit amet, consectetur adipiscing elit. agvjhfvjy"></Box>
                 </div>
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
  )
}
