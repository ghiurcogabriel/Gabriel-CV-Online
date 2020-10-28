import React, { Component } from 'react';
import './Skills.css';
import AOS from 'aos'

export default class Skills extends Component {
    componentDidMount() {
        AOS.init({
          duration : 2000
        });
      }
    render() {
        return (
            <div className="skills-container" id='skills'>
                <div className="title-skills">
                    <h1 data-aos="flip-right">Skills</h1>
                </div>
                <div className="skills-boxes">
                    <div className="first-line-skills skills">
                        <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" className="desc-skills">
                            <h3>Results driven</h3>
                        </div>
                        <div data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" className="desc-skills">
                            <h3>Attention to details </h3>
                        </div>
                    </div>
                    <div className="sec-line-skills skills">
                        <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" className="desc-skills">
                            <h3>Self-starter</h3>
                        </div>
                        <div data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" className="desc-skills">
                            <h3>Analytical mindset</h3>
                        </div>
                    </div>
                    <div className="trh-line-skills skills">
                        <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" className="desc-skills">
                            <h3>Results orientation</h3>
                        </div>
                        <div data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" className="desc-skills">
                            <h3>Communication skills</h3>
                        </div>
                    </div>
                    <div className="frt-line-skills skills">
                        <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" className="desc-skills">
                            <h3>Self-organization</h3>
                        </div>
                        <div data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" className="desc-skills">
                            <h3>Auto-discipline</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
