import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';

import './table.css';

const DataTableGestionParquimetro = ({ data,onEdit }) => {
    const [globalFilter, setGlobalFilter] = useState('');
    const [selectedParquimetro, setSelectedParquimetro] = useState(null);
    const [displayDialog, setDisplayDialog] = useState(false);

    // Función para formatear la fecha como dd/mm/yyyy hh:mm:ss
    const formatDate = (date) => {
        if (!date) return '';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    };

    // Renderizar botones de acciones
    const actionTemplate = (rowData) => {
        return (
            <div className="flex">
                <Button icon="pi pi-eye" className="mr-1" severity='info' onClick={() => handleView(rowData)} />
                <Button icon="pi pi-pen-to-square" className="mr-1" severity='warning' onClick={() => onEdit(rowData)}/>
                <Button icon="pi pi-arrow-up-right" className="" severity='success'/>
            </div>
        );
    };

    const handleView = (rowData) => {
        setSelectedParquimetro(rowData);
        setDisplayDialog(true);
    };

    // Componente de entrada para el filtro
    const patenteFilterTemplate = () => {
        return (
            <InputText
                type="search"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder="Buscar por patente"
            />
        );
    };

    return (
        <div>
            <DataTable
                value={data}
                responsiveLayout="scroll"
                paginator
                rows={5}
                globalFilterFields={['patente']}
                filters={{ 'patente': { value: globalFilter, matchMode: 'contains' } }}
                header={patenteFilterTemplate()}
                sortField="horaIngreso"
                sortMode="multiple"
                cellClassName="text-xs p-1 sm:text-base"
                
                
            >
                <Column className='' field="patente" header="Patente"></Column>
                <Column className='' field="operador" header="Nombre Operador"></Column>
                <Column
                    className='' 
                    field="horaIngreso" 
                    header="Hora Ingreso" 
                    sortable
                    body={(rowData) => formatDate(new Date(rowData.horaIngreso))}
                ></Column>
                <Column className='' header="Acciones" body={actionTemplate}></Column>
            </DataTable>

            {/* Dialog para mostrar la información completa */}
            <Dialog 
                header="Detalles del Parquímetro" 
                visible={displayDialog} 
                className='w-full m-2'
                onHide={() => setDisplayDialog(false)}
                draggable={false}

            >
                {selectedParquimetro && (
                    <div>
                        <p><strong>id:</strong> {selectedParquimetro.id}</p>
                        <p><strong>Patente:</strong> {selectedParquimetro.patente}</p>
                        <p><strong>Operador:</strong> {selectedParquimetro.operador}</p>
                        <p><strong>Hora Ingreso:</strong> {formatDate(new Date(selectedParquimetro.horaIngreso))}</p>
                        <p><strong>Latitud:</strong> {selectedParquimetro.latitud}</p>
                        <p><strong>Longitud:</strong> {selectedParquimetro.longitud}</p>
                    </div>
                )}
            </Dialog>
        </div>
    );
};

export default DataTableGestionParquimetro;
