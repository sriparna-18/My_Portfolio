import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8e86561a-9471-4055-b705-c00846b412b6");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          alert(data.message);
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently open to work in any software domain, collaborate with teams and contribute the best of myself to the projects</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span> sriparnadebbarman45@gmail.com</span>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faPhone} />
                            <span> +91 96099 83177</span>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span> Kolkata, India</span>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your Name' name='name'/>
                    <label htmlFor="">Your email</label>
                    <input type="email" placeholder='Enter your email' name='email'/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" ></textarea>
                    <button type='submit' className="contact-submit">Submit</button>
                </form>
            </div>
            <div className="back-button-container">
          <a href="#home" className="back-button">Back to Home</a>
        </div>
        </div>
        
    )
}

export default Contact;
