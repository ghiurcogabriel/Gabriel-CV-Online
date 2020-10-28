import React, { Component } from 'react';
import './Experience.css';
import dots from './dots.png';
import AOS from 'aos'


export default class Experience extends Component {
    componentDidMount() {
        AOS.init({
          duration : 2000
        });
      }
    render() {
        return (
            <div className='container' id='experience'>
                <div className='title-experience'>
                    <h1 data-aos="zoom-in" class="experience">Experience</h1>
                </div>

                <div className='sec-container'>
                    <div className='main-section'>
                        <div className='sec-section'>
                            <div className="year-and-position">
                                <p data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine" className="year">Oct. 2018-Present</p>
                                <p data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine" className="position">Sales Agent</p>
                            </div>
                            <div className="dots">
                                <img data-aos="fade-up" src={dots} alt="dots"/>
                            </div>
                            <div className="work-desc">
                                <h1 data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine">Telekom Romania Mobile</h1>
                                <p data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine">I work in Telekom store, whitch is in a mall. The main task is to sell mobile and internet contracts to the new customers. Also, I encashment bills and I make the monetary at the end of the day. I work with people and I like this because there is an optimal place where I can become much better and more confident and get rid of the fear of public speaking.</p>
                            </div>
                        </div>
                    </div>

                    <div className='main-section'>
                        <div className='sec-section'>
                        <div className="year-and-position">
                            <p data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine" className="year">Dec. 2016-May 2018</p>
                            <p data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine" className="position">Sales Agent</p>
                        </div>
                            <div className="dots">
                                <img data-aos="fade-up" src={dots} alt="dots"/>
                            </div>
                            <div className="work-desc">
                                <h1 data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine">NN Romania</h1>
                                <p data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine">The main taks was to sell life insurance, five-year savings insurance and insurance for childrens</p>
                            </div>
                        </div>
                    </div>

                    <div className='main-section'>
                        <div className='sec-section'>
                            <div className="year-and-position">
                                <p data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine" className="year">Aug. 2017-Feb. 2018</p>
                                <p data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine" className="position">Sales Agent</p>
                            </div>
                            <div className="dots">
                                <img data-aos="fade-up" src={dots} alt="dots"/>
                            </div>
                            <div className="work-desc">
                                <h1 data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine">Telekom</h1>
                                <p data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine">This job took place in the field in different locations in Cluj County and as an agent we had to sell television and internet subscriptions</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
