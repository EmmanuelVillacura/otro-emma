import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

const IngresarEditarGestionParquimetro = ({ onSave, parquimetroToEdit, asignaId }) => {
    const [patente, setPatente] = useState('');
    const [operador, setOperador] = useState('');
    const [horaIngreso, setHoraIngreso] = useState(null); // Ahora será de tipo Date
    const [latitud, setLatitud] = useState('');
    const [longitud, setLongitud] = useState('');

    useEffect(() => {
        if (parquimetroToEdit) {
            // Si hay un parquímetro para editar, actualiza el formulario
            setPatente(parquimetroToEdit.patente);
            setOperador(parquimetroToEdit.operador);
            setHoraIngreso(parquimetroToEdit.horaIngreso); // Se espera que horaIngreso sea un objeto Date
            setLatitud(parquimetroToEdit.latitud);
            setLongitud(parquimetroToEdit.longitud);
        } else {
            // Limpia el formulario si no hay parquímetro para editar
            clearForm();
            const time = new Date()
            setHoraIngreso(time)
        }
    }, [parquimetroToEdit]);

    const clearForm = () => {
        setPatente('');
        setOperador('');
        setHoraIngreso(null);
        setLatitud('');
        setLongitud('');
    };

    const handleSave = () => {
        // Crea un objeto con la información que se va a guardar
       
        const newParquimetro = {
            id:parquimetroToEdit ? parquimetroToEdit.id: asignaId(),
            patente,
            operador,
            horaIngreso, 
            latitud: parseFloat(latitud),
            longitud: parseFloat(longitud),
        };
        
        onSave(newParquimetro); // Envía los datos al componente padre
        clearForm();

        
       
    };

    return (
        <div className='flex flex-wrap align-items-center justify-content-center w-full'>
            <div className="p-field w-10 my-2">
                <label htmlFor="patente">Patente</label>
                <InputText className='w-full' id="patente" value={patente} onChange={(e) => setPatente(e.target.value)} />
            </div>

            <div className="p-field w-10 my-2">
                <label htmlFor="operador">Operador</label>
                <InputText className='w-full' id="operador" value={operador} onChange={(e) => setOperador(e.target.value)} />
            </div>

            <div className="p-field w-10 my-2">
                <label htmlFor="horaIngreso">Hora Ingreso</label>
                <Calendar 
                    id="horaIngreso" 
                    value={horaIngreso} 
                    onChange={(e) => setHoraIngreso(e.value)} 
                    showTime 
                    showSeconds 
                    dateFormat="dd/mm/yy" 
                    hourFormat="24"
                    placeholder='test'
                    className='w-full'
                />
            </div>

            <div className="p-field w-10 my-2">
                <label htmlFor="latitud">Latitud</label>
                <InputText className='w-full' id="latitud" value={latitud} onChange={(e) => setLatitud(e.target.value)} />
            </div>

            <div className="p-field w-10 my-2">
                <label htmlFor="longitud">Longitud</label>
                <InputText className='w-full' id="longitud" value={longitud} onChange={(e) => setLongitud(e.target.value)} />
            </div>

            <div className="p-d-flex p-jc-end my-2">
                <Button label="Guardar" icon="pi pi-check" onClick={handleSave} />
            </div>
        </div>
    );
};

export default IngresarEditarGestionParquimetro;
