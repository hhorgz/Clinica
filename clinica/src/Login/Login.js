import React, { Component } from 'react';
import AuthenticationForm from './AuthenticationForm/AuthenticationForm';
import RecoverForm from './RecoverForm/RecoverForm';

import logo from '../resources/images/hospital.svg';

import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAuthentication: true
        }
    }

    toggleFormHandler = () => {
        this.setState({ showAuthentication: !this.state.showAuthentication });
    }

    render() {

        let formShowed = <AuthenticationForm 
            click={this.toggleFormHandler}
            />
        if (!this.state.showAuthentication) {
            formShowed = <RecoverForm 
                click={this.toggleFormHandler}
                />
        }

        return (
            <div className="Login App-login-area">

                <div className='App-logo-login-area'>
                    <img 
                        src={logo} 
                        className='App-logo-login App-centered-image' 
                        alt='clinica-X'/>
                </div>

                <div className='App-login-header'>
                    <h3>CLINICA PURPURA VISUAL</h3>
                </div>
                {formShowed}
            </div>
        );
    }
}

export default Login;
