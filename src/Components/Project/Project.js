import React, { Component } from 'react';
import './Project.css'
import home from './home.png'
import login from './login.png'
import search from './search.png'
import favorites from './favorites.png'

export default class Project extends Component {
    render() {
        return (
            <div className='project' id='project'>
                <h1 data-aos="zoom-out-up">Team Project</h1>
            <div className='project-container'>
                
                <div className='movieandchill'>
                    <img src={home} alt='home' className='movieandchill-imgs'  data-aos="zoom-in"/>
                    <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" className='p-project'>HOME PAGE</h2>
                </div>
                <div className='movieandchill'>
                    <img src={login} alt='login' className='movieandchill-imgs' d data-aos="zoom-in"/>
                    <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" className='p-project login'>LOGIN PAGE</h2>
                </div>
                <div className='movieandchill'>
                    <img src={search} alt='search' className='movieandchill-imgs'  data-aos="zoom-in"/>
                    <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" className='p-project search'>SEARCH PAGE</h2>
                </div>
                <div className='movieandchill'>
                    <img src={favorites} alt='favorites' className='movieandchill-imgs'  data-aos="zoom-in"/>
                    <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" className='p-project favorites'>FAVORITES PAGE</h2>
                </div>
            </div>
            </div>
                
        )
    }
}
