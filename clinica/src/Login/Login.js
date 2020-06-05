import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';

import logo from '../resources/images/hospital.svg';

import './Login.css';

class Login extends Component {

    render() {
        const clinicaLogo = <img src={logo} className='App-logo-login' alt='clinica-X' />;

        return (
            <div className="Login">
                <Card header={clinicaLogo}
                    title='Clinica X'
                    subTitle='Iniciar sesion'>
                        
                    <div className='p-fluid'>
                        <div className='p-field p-grid'>
                            <label htmlFor='username' className='p-col-12 p-md-2'>Usuario</label>
                            <div className='p-col-12 p-md-10'>
                                <InputText id='username' type='text' />
                            </div>
                        </div>
                        <div className='p-field p-grid'>
                            <label htmlFor='password' className='p-col-12 p-md-2'>Password</label>
                            <div className='p-col-12 p-md-10'>
                                <Password id='password' type='text' />
                            </div>
                        </div>
                    </div>
                </Card>

            </div>
        );
    }
}

export default Login;
