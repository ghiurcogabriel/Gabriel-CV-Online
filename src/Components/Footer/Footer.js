import React, { Component } from 'react';
import './Footer.css';
import uparrow from './up-arrow.png'

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          is_visible: false
        };
      }
      componentDidMount() {
        let scrollComponent = this;
        document.addEventListener("scroll", function(e) {
          scrollComponent.toggleVisibility();
        });
      }
      toggleVisibility() {
        if (window.pageYOffset > 300) {
          this.setState({
            is_visible: true
          });
        } else {
          this.setState({
            is_visible: false
          });
        }
      }
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    render() {
        const { is_visible } = this.state;
        return (
            <div class="footer-container">
              <div className='footer-content'>
                <p>©All Rights Reserved</p>
                <h1>Ghiurco Gabriel</h1>
                <p>X-2020</p>
              </div>
                    

                <div className="scroll-to-top">
                    {is_visible && (
                    <div onClick={() => this.scrollToTop()}>
                        <img src={uparrow} alt='up' className='up-arrow'/>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}
