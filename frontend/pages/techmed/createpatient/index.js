import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { PatientService } from '../../../demo/service/PatientService';

const CreatePatient = () => {
    const patientService = new PatientService();
    const toast = useRef();
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState(null);
    const [gender, setGender] = useState(null);
    const [loading, setLoading] = useState(false);
    const genderSelectItems = [
        { label: 'Masculino', value: 'M' },
        { label: 'Femenino', value: 'F' }
    ];
    const maxDate = new Date();
 
    const showToast = (summary, severity, message) => {
        toast.current.show({ severity: severity, summary: summary, detail: message, life: 5000 });
    }

    const createPatient = async (name, birthDate, gender) => {
        
        await fetch(patientService.url + 'patients/', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                birth_date: birthDate,
                sex: gender
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization: patientService.bearerToken
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.hasOwnProperty('id') && data.id > 0){
                    showToast('Nuevo paciente', 'success', 'El paciente fue creado con exito')
                } else {
                    showToast('Error', 'error', JSON.stringify(data));
                }
            })
            .catch((err) => {
                console.log(err.message);
                showToast('Error', 'error', err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            var formatedDate = patientService.applyDateFormat(birthDate);
        } catch (err) {
            setLoading(false);
            showToast('Fecha de nacimiento', 'warn', 'Hay error en la fecha de nacimiento');
            setLoading(false);
            return;
        }
        createPatient(name, formatedDate, gender);
    };

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card p-fluid">
                    <h5>Registro de paciente</h5>
                    <Toast ref = {toast} />
                    <form onSubmit={handleSubmit}>
                        <div className="field grid">
                            <label htmlFor="name" className="col-12 mb-2 md:col-2 md:mb-0">
                                Nombre
                            </label>
                            <div className="col-12 md:col-10">
                                <InputText id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="field grid">
                            <label htmlFor="birthDate" className="col-12 mb-2 md:col-2 md:mb-0">
                                Fecha de nacimiento
                            </label>
                            <div className="col-12 md:col-10">
                                <Calendar showIcon showButtonBar readOnlyInput dateFormat="yy/mm/dd" maxDate={maxDate} id="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.value)} />
                            </div>
                        </div>
                        <div className="field grid">
                            <label htmlFor="sex" className="col-12 mb-2 md:col-2 md:mb-0">
                                Sexo
                            </label>
                            <div className="col-12 md:col-10">
                                <Dropdown id="sex" value={gender} options={genderSelectItems} onChange={(e) => setGender(e.value)} placeholder="Seleccione una opci&oacute;n" />
                            </div>
                        </div>
                        <div className='col-12'>
                            <Button label="Registrar" type='submit' loading={loading}></Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePatient;