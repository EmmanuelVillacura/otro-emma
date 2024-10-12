import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function useLogin(){

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false); 

    const authHandler=(toast)=>{
        setLoading(true);
        //toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
        setTimeout(()=>{
            navigate('/parquimetro/gestion-parquimetro')
            toast.current.show({ severity: 'success', summary: 'Ingreso exitoso',life:1300 });
            setLoading(false);
        },2000)
    }

   
    
    return{authHandler,loading}
    
    }