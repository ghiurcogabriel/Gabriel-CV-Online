import React, { Component } from 'react';
import './Training.css';

export default class Training extends Component {
    render() {
        return (
            <div className="trainig-container" id='training'>
                <div>
                    <h1 data-aos="flip-right">Professional Training</h1>
                    <h4 data-aos="zoom-out">The Informal School of IT – Web Development module</h4>
                </div>
                <div className="training-content">
                    <p data-aos="flip-right">HTML5, and CSS3: how to build a User Interface</p>
                    <p data-aos="flip-left"> JavaScript: how to use variables, functions, objects, scope, AJAX, jQuery, DOM</p>
                    <p data-aos="flip-right">PHP: how to use variables, functions, classes, includes, interaction with the browser and CRUD operations on a database (MySQL)</p>
                    <p data-aos="flip-left">OOP: basics about classes, objects and inheritance in PHP</p>
                    <p data-aos="flip-left">Deployment: learned the basics about deploying a LAMP architecture and installing and running a PHP/MySQL application </p>
                </div>
            </div>
        )
    }
}
