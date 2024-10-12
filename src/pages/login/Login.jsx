import React from 'react'
import { useLogin } from './useLogin'
import styles from './login.module.css'
import { Button } from 'primereact/button';     
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { ProgressSpinner } from 'primereact/progressspinner';      

export default function Login({toast}) {

    const {authHandler,loading}=useLogin()

  return (
    <div className={`${styles.div_general} w-full h-screen flex justify-content-center align-items-center p-0`}>

          {loading && (
                <div className="absolute top-0 w-full flex justify-content-center">
                    <ProgressSpinner className='w-3rem sm:w-4rem' />
                </div>
            )}

      <div className={`${styles.card} w-10 sm:w-6 h-28rem flex flex-column align-items-center justify-content-center`}>
        <h3 className="w-full text-center mb-4 text-white text-4xl">Login</h3>
        <div className="flex justify-content-center align-items-center flex-wrap gap-2">
            <div className='w-full flex flex-wrap justify-content-center'>
                <label htmlFor="username" className="mb-2 text-white w-9">Usuario</label>
                <InputText id="username" aria-describedby="username-help" className="w-9 mb-3 p-2" />
            </div>
            <div className='w-full flex flex-wrap justify-content-center'>
                <label htmlFor="contrasena" className="mb-2 text-white w-9">Contraseña</label>
                <InputText id="contrasena" type='password' className="w-9 mb-3 p-2" />
            </div>
          
          <Button onClick={()=>authHandler(toast)} label="ingresar" icon="pi pi-check-circle" className="p-button-success w-min px-3 py-1" />
        </div>
      </div>
    </div>
  )
}
