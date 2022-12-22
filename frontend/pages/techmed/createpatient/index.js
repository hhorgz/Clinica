import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

const CreatePatient = () => {
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState(null);
    const [gender, setGender] = useState(null);
    const [loading, setLoading] = useState(false);
    const genderSelectItems = [
        { label: 'Masculino', value: 'M' },
        { label: 'Femenino', value: 'F' }
    ];
    const maxDate = new Date();

    const postPatient = async (name, birthDate, sex) => {
        await fetch('http://localhost:8000/patients/', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                birth_date: birthDate.getFullYear() + '-' + ('00' + (birthDate.getMonth() + 1)).slice(-2) + '-' + ('00' + birthDate.getDate()).slice(-2),
                sex: sex
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization: "Bearer OsouFzTBOCQJ6YIAwSU7quqkqIWRra"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        postPatient(name, birthDate, gender)
    };

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card p-fluid">
                    <h5>Registro de paciente</h5>
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