import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const PatientsList = () => {
    const [patients, setPatients] = useState([]);
    const [patientsLoading, setPatientsLoading] = useState(true);

    // REST API
    useEffect(() => {
        // TODO: Find a way to use ENV for URLs
        fetch('http://localhost:8000/patients/', {
            headers: {
                // TODO: Find a better way to store token, client_id and client_secret
                Authorization: "Bearer OsouFzTBOCQJ6YIAwSU7quqkqIWRra"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPatients(data.results);
                setPatientsLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Pacientes</h5>
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
