import React, { Component } from 'react';
import './Education.css';
import dots from './dots.png'

export default class Education extends Component {
    render() {
        return (
            <div className="container" id='education'>
                <div className="title-education">
                    <h1 data-aos="zoom-out" className="education">Education</h1>
                </div>
                    <div className="sec-education-container">

                    <div className="main-education-section">
                        <div className="sec-education-section">
                            <div className="year-and-position-education">
                                <p data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine" className="year">2016 - 2019</p>
                            </div>
                            <div className="dots-edu">
                                <img data-aos="fade-up" src={dots} alt="dots"/>
                            </div>
                                <div className="work-desc-edu">
                                    <h1 data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine">Facultate de Geografie UBB</h1>
                                    <p data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine">I studied at the Faculty of Geography in Cluj-Napoca, it was a dream that come true because I like very much everything about the Earth and Universe and everything what happen around us.</p>
                            </div>
                        </div>
                    </div>

                    <div className="main-education-section">
                        <div className="sec-education-section">
                            <div className="year-and-position-education">
                                <p data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine" className="year">2012-2016</p>
                            </div>
                            <div className="dots-edu">
                                <img data-aos="fade-up" src={dots} alt="dots"/>
                            </div>
                            <div className="work-desc-edu">
                                <h1 data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine">Economic High School</h1>
                                <p data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine">I studied at the Economic High School in Baia Mare about public alimentation and tourism.</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
