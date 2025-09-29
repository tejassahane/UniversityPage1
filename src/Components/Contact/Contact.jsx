import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import btn_icon from '../../assets/white-arrow.png'

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "54facc87-b622-42db-aa5d-20e974c18bb8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out for collaborations, project inquiries, or opportunities.
                 I’m always open to discussing innovative ideas, sharing knowledge,
                  and building impactful solutions together.
                 Let’s connect and create something meaningful!</p>
        <ul>
            <li><img src={mail_icon} alt="" />sahanetejas@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91 876 726 2323</li>
            <li><img src={location_icon} alt="" />38, 9th Cross, 13th Main,
                 BTM layout 1st stage, 2nd Phase, Bangalore, Bengaluru, Karnataka 560029</li>
        </ul>
        </div>
        <div className="contact-col">

      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name='name' placeholder='Enter your name' required/>
      <label>Phone Number</label>
      <input type='tel' name="phone" placeholder='Enter Mobile Number' required></input>
      <label>Write Your Message Here</label>
      <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
      <button type="submit" className="btn dark-btn"> Submit Now <img src={btn_icon} alt="" /></button>
      </form>
      <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
