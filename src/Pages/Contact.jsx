import React, { useState } from 'react'
import Herocontact from '../Components/Herocontact'
import '../Pages/Contact.css';
import Footer from '../Components/Footer';
import axios from 'axios';


export default function Contact() {
  const[apply,setApply]=useState({
        name:"", email:"", subject:"", message:""
    });
  const [error,setError]=useState("");
    const userDetails=(e)=>{setApply({...apply,[e.target.name]:e.target.value})
    setError("");
  };

  function Custom(){
    let tempErr={};
    if(!apply.name.trim()){
      tempErr.name="Please Enter Your Name"
    }
    var emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!apply.email){
      tempErr.email="Please Enter the E-mail"
    }else if(!emailpattern.test(apply.email)){
      tempErr.email="Please Enter a Valid Email"
    }
    if(!apply.subject){
      tempErr.subject="Please Enter the Subject"
    }
     if(!apply.message){
      tempErr.message="Please Enter a Message"
    }
    setError(tempErr);
    return Object.keys(tempErr).length===0;
  }


  const Data=async (e)=>{
    e.preventDefault();
    if(Custom()){
    console.log(apply);
    console.log("Data Submitted!")
    alert("Thank You for Applying!.....");
    setApply({ name:"", email:"", subject:"", message:""});
  }

  try{
      await axios.post("http://localhost:4005/logindata",apply);
      alert("Data sended to Db Successfully.")
    }
    catch(err){
      if(err){
        console.error(err);
      }
    }

};
  return (
    <div>
      <Herocontact herosections={"Contact"}/>
      <div className="contacts">
            <h2 className="cont-title">Contact Us</h2>
            <h1 className="cont-head">Contact For Any Query</h1>
        </div>
        <div className='contact-section'>
          <div className='contact-dis'>
          <h2 className='cont-dis'>Get In Touch</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, distinctio magnam nemo doloribus nostrum, necessitatibus</p>
          <div className='call'>
          <p><ion-icon name="location-outline"></ion-icon> 123 Street, Chennai, India</p>
          <p><ion-icon name="call-outline"></ion-icon> +91 9872654310</p>
          <p><ion-icon name="mail-outline"></ion-icon> info@edulearn.com</p>
          </div>
          </div>
          <iframe title="Google Map - New York Location" className="frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.185928021986!2d80.2184472148215!3d13.00666249083008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267709aa40a7d%3A0xca348695fc512750!2sGuindy%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1733720000000" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
          <div className='form-section'>
          
               <div className="userforms">
            <form onSubmit={Data}>
              
                <label className='labels'>Name:</label><br/>
            
                <input type="text" name="name"  className="inputs" onChange={userDetails} value={apply.name} placeholder="Enter your Name"/><br/>
                 {error.name && <p className='input-para'>{error.name}</p>}
                
                <label className='labels'>Email:</label><br/>
                <input type="text" name="email" className="inputs" onChange={userDetails} value={apply.email}  placeholder="Enter your Email"/><br/>
                 {error.email && <p className='input-para'>{error.email}</p>}
            
                <label className='labels' >Subject:</label><br/>
                <input type="text" name="subject" className="inputs"  onChange={userDetails} value={apply.subject} placeholder="Enter your Subject"/><br/>
                  {error.subject && <p className='input-para'>{error.subject}</p>}

                <label className='messages'>Message:</label><br/>
                <textarea name="message" className="inputs" onChange={userDetails} value={apply.message} placeholder="Enter your Message"></textarea><br/>
                {error.message && <p className='input-para'>{error.message}</p>}

                <button className='buttons' type="submit">Send Message</button>
      
               </form>
          </div>
        </div>

    </div>
    <Footer/>
    </div>
  )
  };
