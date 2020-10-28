import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-scroll";
import menu from './menu.png'

export default class Navbar extends Component {
    render() {
        return (
            <div className='main-container-header'>
                <div className='cv-name'>
                    <Link
                        activeClass="active"
                        to="profilehome"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}
                    >
                        <h1>Ghiurco Gabriel</h1>
                    </Link>
                </div>
                <div className='dropdown'>
                    <img src={menu} alt='menu' className='menu' />
                    <div className='navigation'>
                        <Link
                            activeClass="active"
                            to="training"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={500}
                        >
                            <h3 className='navbar-buttons'>Training</h3>
                        </Link>
                        <Link
                            activeClass="active"
                            to="project"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={500}
                        >
                            <h3 className='navbar-buttons'>Team Project</h3>
                        </Link>
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                        >
                            <h3 className='navbar-buttons'>Skills</h3>
                        </Link>
                        <Link
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={1000}
                        >
                            <h3 className='navbar-buttons'>Experience</h3>
                        </Link>
                        <Link
                            activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={1300}
                        >
                            <h3 className='navbar-buttons'>Education</h3>
                        </Link>
                        
                        
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={1500}
                        >
                            <h3 className='navbar-buttons'>Contact</h3>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
