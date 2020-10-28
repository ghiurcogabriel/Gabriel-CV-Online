import React, { Component } from 'react';
import './Profile.css';
import facebook from './facebook.png';
import github from './github.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import profile from './profile.jpeg';
import AOS from 'aos';
import { Link } from "react-scroll";


export default class Profile extends Component {
    componentDidMount() {
        AOS.init({
          duration : 2000,
          overflow: 'hidden'
        });
      }
    render() {
        return (
            <div className='profile-container' id='profilehome'>
                <div className='profile'>
                    <div className='profile-picture'>
                        <img data-aos="slide-right" data-aos-overflow="hidden" src={profile} alt='profile' className='img-profile'/>
                    </div>
                    <div data-aos="slide-left" className='profile-info'>
                        <h2>Ghiurco Gabriel</h2>
                        <p>Junior Frond-End Developer</p>
                        <br></br>
                        <h5>Phone:</h5>
                        <p>0754893303</p>
                        <br></br>
                        <h5>Email:</h5>
                        <p>ghiurcogabriel@gmail.com</p>
                        <br/>
                        <h5>Address:</h5>
                        <p>Cluj-Napoca, Str. Busteni, Nr. 11</p>
                        <br/>
                        <h5>Date of Birth:</h5>
                        <p>25 Oct. 1997</p>
                        <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={1000}
                    >
                        <button className="BUTTON_BJT">Contact Me</button>
                    </Link>
                    </div>
                </div>

                <div className='para-section'>
                    <div className='profile-container-background'>
                        <div data-aos="fade-down" className='links'>
                            <a href='https://www.facebook.com/gabriel.ghiurco.3/' target="_blank" rel = "noopener noreferrer"><img data-aos="fade-right" data-aos-overflow="hidden" src={facebook} alt='facebook' className='img-link'/></a>
                            <a href='https://www.instagram.com/gabrielghiurco/' target="_blank" rel = "noopener noreferrer"><img data-aos="fade-up" data-aos-overflow="hidden" src={instagram} alt='instagram' className='img-link'/></a>
                            <a href='https://www.linkedin.com/in/ghiurco-gabriel-367847188/' target="_blank" rel = "noopener noreferrer"><img data-aos="fade-down" src={linkedin} alt='linkedin' className='img-link'/></a>
                            <a href='https://github.com/ghiurcogabriel?tab=repositories' target="_blank" rel = "noopener noreferrer"><img data-aos="fade-left" src={github} alt='github' className='img-link'/></a>
                            </div>
                        <div className='desc-para'>
                            <h1 data-aos="zoom-out">Hello! I'm Gabriel</h1>
                                <p data-aos="zoom-in">I'm a friendly, team-working person eager to learn more and gain experience in the industry. I'm a hard worker with lots of ambition, trying to learn something new daily. I have  studied to the Informal School of IT about Web Development concepts and I'm looking for new challenges and a new career as a rookie Web Developer.
                                I've learned about HTML and CSS, how to build a responsive UI, JS and how to use variables, objects, functions, DOM, Ajax and Promises, OOP, GIT. I also learned about React JS and how modern applications work and the final team project in made in React JS.
                                </p>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}