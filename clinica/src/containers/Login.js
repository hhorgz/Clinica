import React, { Component } from 'react';
import LoginComponent from '../Login/Login';

import backgroundImage from '../resources/images/EyeIllustration.svg';

import './LoginContainer.css';

class Login extends Component {

    render() {

        return (
            <div className="p-grid vertical-container p-fluid">
                <div className='p-col-12 p-md-6 p-lg-4 p-col-align-center'>
                    <div className='box box-stretched'>
                        <LoginComponent/>
                    </div>
                </div>
                <div className='p-col-12 p-md-6 p-lg-8 p-align-stretch'>
                    <div className='box box-stretched'>
                        <img 
                            src={backgroundImage}
                            className="App-banner-login App-centered-login"
                            alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
