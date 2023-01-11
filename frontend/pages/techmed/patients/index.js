import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { PatientService } from '../../../demo/service/PatientService';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import CreatePatient from '../createpatient';

const PatientsList = () => {
    const patientService = new PatientService();
    const [patients, setPatients] = useState([]);
    const [patientsLoading, setPatientsLoading] = useState(true);
    const [displayCreatePatientForm, setDisplayCreatePatientForm] = useState(false);
    
    const openCreatePatientForm = () => {
        setDisplayCreatePatientForm(true);
    }

    const listPatients = () => {
        fetch(patientService.url + 'patients/', {
            headers: {
                Authorization: patientService.bearerToken
            }
        })
        .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPatients(data.results)
            })
            .catch((err) => {
                throw err.message;
            })
            .finally(() => setPatientsLoading(false));
    }
    
    // REST API
    useEffect(() => {
        listPatients();
    }, []);
    
    const header = <Button icon='pi pi-user-plus' label='Registrar paciente' onClick={openCreatePatientForm}/>;

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Pacientes</h5>
                    <Dialog visible={displayCreatePatientForm} style={{ width: '30vw' }} modal onHide={() => setDisplayCreatePatientForm(false)}>
                        <CreatePatient></CreatePatient>
                    </Dialog>
                    <DataTable
                        value={patients}
                        paginator
                        className="p-datatable-gridlines"
                        showGridlines
                        rows={10}
                        dataKey="id"
                        loading={patientsLoading}
                        responsiveLayout="scroll"
                        emptyMessage="No se encontraron pacientes"
                        header={header}
                    >
                        <Column field="name" header="Nombre" />
                        <Column field="age" header="Edad" />
                        <Column field="birth_date" header="Fecha de nacimiento" />
                        <Column field="sex" header="Sexo" />
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default PatientsList;
