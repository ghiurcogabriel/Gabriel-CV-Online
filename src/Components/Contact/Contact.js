import React, { Component } from 'react';
import './Contact.css';
import facebook from './facebook.png';
import github from './github.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import user from './user.png';
import phone from './phone.png';
import mail from './mail.png';
import emailjs from 'emailjs-com';



const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const formValid = ({ errors, ...rest }) => {
    let valid = true;
    Object.values(errors).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    Object.values(rest).forEach((val) => {
      val === "" && (valid = false);
    });
    return valid;
  };

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        errors: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
    };
    sendEmail = (e)=> {
        e.preventDefault();
        if (formValid(this.state)) {
            const { name, email, subject, message } = this.state;
            let contentEmail = {
              name: name,
              email: email,
              subject: subject,
              message: message,
            };
    
        emailjs.send('gmail', 'template_w5lq1dq', contentEmail, 'user_zWipwWeAHFaG9Sd8Qlaxs')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          this.resetForm();
      }
    }
    resetForm() {
      this.setState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let errors = { ...this.state.errors };
        switch (name) {
          case "name":
            errors.name = value.length < 1 ? "Please enter your name." : "";
            break;
          case "email":
            errors.email = emailRegex.test(value)
              ? ""
              : "Please enter a valid email address.";
            break;
          case "subject":
            errors.subject = value.length < 1 ? "Please enter a subject." : "";
            break;
          case "message":
            errors.message = value.length < 1 ? "Please enter a message" : "";
            break;
          default:
            break;
        }
        this.setState({ errors, [name]: value });
      };

      
      render(){ 
        const { errors } = this.state;
        return (
            <div className='contact-container' id='contact'>
                <div className="contact-name">
                    <h1 className='contact-h1' data-aos="flip-right">Contact Me</h1>
                </div>
                <div className='main-contact'>
                    <form className='form-input' onSubmit={this.sendEmail}>
                      <div className="first-contact">
                        <div className="inputs">
                            <div className="name-email">
                              <div className='contact-forms'>
                                <input
                                    value={this.state.name}
                                    className={`formInput ${errors.name.length > 1 ? "error" : null}`}
                                    id='top-inputs' 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    name='name' 
                                    placeholder="Your Full Name"
                                    autocomplete="off"
                                />
                                {errors.name.length > 0 && ( <p className="errorMessage">{errors.name}</p> )}
                              </div>
                                
                                <div className='contact-forms'>
                                 <input 
                                    value={this.state.email}
                                    className={`formInput form-inputs ${errors.email.length > 0 ? "error" : null}`}
                                    id='top-inputs' 
                                    onChange={this.handleChange} 
                                    type="email" 
                                    name='email'  
                                    placeholder="Your Email"
                                    autocomplete="off"
                                />
                                 {errors.email.length > 0 && ( <p className="errorMessage">{errors.email}</p> )} 
                                </div>
                                
                            </div>
                                <input 
                                    value={this.state.subject}
                                    className={`formInput ${errors.subject.length > 0 ? "error" : null}`}
                                    type="text" 
                                    onChange={this.handleChange} 
                                    name='subject' 
                                    placeholder="Subject"
                                    autocomplete="off"
                                />
                                 {errors.subject.length > 0 && ( <p className="errorMessage">{errors.subject}</p> )}
                                <textarea
                                    value={this.state.message}
                                    className={`formInput ${errors.message.length > 1 ? "error" : null}`}
                                    placeholder='Your Message' 
                                    onChange={this.handleChange} 
                                    name='message' 
                                    rows="4" 
                                    cols="50"
                                    >  
                                </textarea>
                                {errors.message.length > 0 && ( <p className="errorMessage">{errors.message}</p> )}
                                <button 
                                    className="BUTTON_AJP">
                                    Sent
                                </button>
                        </div>
                    </div>  
                    </form>
                    
                
                <div className="second-contact">
                    <div className="desc-contact">
                        <img src={user} alt='user' className='contact-imgs' />
                        <h4>Ghiurco Gabriel</h4>
                        <p>Junior Web Developer</p>
                        <br/>
                        <img src={phone} alt='phone' className='contact-imgs' />
                        <h4>Phone:</h4>
                        <p>0754893303</p>
                        <br/>
                        <img src={mail} alt='mail' className='contact-imgs' />
                        <h4>Email:</h4>
                        <p>ghiurcogabriel@gamil.com</p>
                        <br/>
                    </div>
                        <div className="social-media-box">
                            <a href='https://www.facebook.com/gabriel.ghiurco.3/' target="_blank" rel = "noopener noreferrer"><img src={facebook} alt="facebook" className="img-facebook img-link"/></a>
                            <a href='https://www.instagram.com/gabrielghiurco/' target="_blank" rel = "noopener noreferrer"><img src={instagram} alt="instagram" className="img-instagram img-link"/></a>
                            <a href='https://www.linkedin.com/in/ghiurco-gabriel-367847188/' target="_blank" rel = "noopener noreferrer"><img src={linkedin} alt="linkedin" className="img-linkedin img-link"/></a>
                            <a href='https://github.com/ghiurcogabriel?tab=repositories' target="_blank" rel = "noopener noreferrer"><img src={github} alt="github" className="img-github img-link"/></a> 
                        </div>
                </div>
                </div>
            </div>
        )
    }
}