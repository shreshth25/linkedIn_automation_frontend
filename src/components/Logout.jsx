import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const data = JSON.parse(localStorage.getItem("automation_linkedin"));
    const main_data = {
      access_token: data["accessToken"],
    };
    const navigate = useNavigate()

    const getProfile = async () => {
        const response = await fetch(
          "http://localhost:3000/api/auth/linkedin/logout",
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

    navigate("/login")
  })

}

export default Logout
