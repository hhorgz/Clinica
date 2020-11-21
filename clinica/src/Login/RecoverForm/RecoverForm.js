import React from 'react';
import { InputText } from 'primereact/inputtext';
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
            <div className='p-col-12 p-md-6 p-lg-6'>
                <Button 
                    label='Recuperar contrasena'
                    className='p-button-rounded'>
                </Button>
            </div>
            <div className='p-col-12 p-md-6 p-lg-6'>
                <Button 
                    label='Cancelar'
                    className='p-button-rounded p-button-secondary' 
                    onClick={props.click}/>
            </div>
        </div>
    );
}

export default recoverPassword;