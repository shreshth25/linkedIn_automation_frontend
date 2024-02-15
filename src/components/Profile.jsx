import React, { useEffect, useState } from "react";

const Profile = () => {
  const url = import.meta.env.VITE_BACKEND_URL 
  const [userData, setUserData] = useState([]);
  const data = JSON.parse(localStorage.getItem("automation_linkedin"));
  const main_data = {
    access_token: data["accessToken"],
  };

  const getProfile = async () => {
    const response = await fetch(
      url+"api/auth/linkedin/profile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(main_data),
      }
    );
    const user = await response.json();
    setUserData(user.userData);
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="card card-widget widget-user">
      <div className="widget-user-header bg-info">
        <h3 className="widget-user-username">{userData.name}</h3>
        <h5 className="widget-user-desc">{userData.email}</h5>
      </div>
      <div className="widget-user-image">
        <img
          className="img-circle elevation-2"
          src={userData.picture}
          alt="User Avatar"
        />
      </div>
      <div className="card-footer">
      </div>
    </div>
  );
};

export default Profile;
