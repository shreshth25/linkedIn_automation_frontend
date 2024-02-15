import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const url = import.meta.env.VITE_BACKEND_URL
    const data = JSON.parse(localStorage.getItem("automation_linkedin"));
    const main_data = {
      access_token: data["accessToken"],
    };
    const navigate = useNavigate()

    const getProfile = async () => {
        const response = await fetch(
          url+"api/auth/linkedin/logout",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(main_data),
          }
        );
        const user = await response.json();
      };

  useEffect(()=>{
    getProfile()
    localStorage.removeItem('automation_linkedin')
    localStorage.removeItem('driver_shown')

    navigate("/login")
  })

}

export default Logout
