import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

import logo from '../resources/images/hospital.svg';

import './Login.css';

class Login extends Component {

    render() {

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

                <div className='p-grid p-fluid'>
                    <div className='p-col-12'>
                        <div className='p-inputgroup'>
                            <span className='p-inputgroup-addon'>
                                <i className='pi pi-user'></i>
                            </span>
                            <InputText 
                                id='username' 
                                type='text' 
                                placeholder='Usuario'/>
                        </div>
                    </div>
                    <div className='p-col-12'>
                        <div className='p-inputgroup'>
                            <span className='p-inputgroup-addon'>
                                <i className='pi pi-key'></i>
                            </span>
                            <Password 
                                id='password' 
                                placeholder='Contrasena'
                                feedback={false}
                                type='text' />
                        </div>
                    </div>
                    <div className='p-col-12 p-md-6 p-lg-6'>
                        <Button 
                            label='Ingresar'
                            className='p-button-rounded'>
                        </Button>
                    </div>
                    <div className='p-col-12 p-md-6 p-lg-6'>
                        <Button 
                            label='Olvide contrasena'
                            className='p-button-rounded p-button-secondary'>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
