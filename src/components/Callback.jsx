import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Callback = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const searchParams = new URLSearchParams(location.search); 
    const accessToken = searchParams.get("access_token"); 
    const sub = searchParams.get("sub");
    const data = {
        accessToken,
        sub
    }
    localStorage.setItem('automation_linkedin', JSON.stringify(data))
    useEffect(()=>{
        navigate('/profile')
    })
    
}

export default Callback
