import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const recoverPassword = (props) => {
    return(
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
                    className='p-button-rounded' />
            </div>
            <div className='p-col-12 p-md-6 p-lg-6'>
                <Button 
                    label='Olvid&eacute; contrase&ntilde;a'
                    className='p-button-rounded p-button-secondary'
                    onClick={props.click} />
            </div>
        </div>
    );
}

export default recoverPassword;