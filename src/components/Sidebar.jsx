import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const Sidebar = () => {
  useEffect(() => {
    const check = localStorage.getItem("driver_shown")
    if(!check)
    {
      const driverObj = driver({
        showProgress: true,
        steps: [
          { element: '.profile-tab', popover: { title: 'Profile', description: 'You can check your profile here.' } },
          { element: '.post-tab', popover: { title: 'Create Post', description: 'Here you can share your thoughts on linkedIn.' } },
          { element: '.logout-tab', popover: { title: 'Logout Tab', description: 'Place to say good bye to us.' } }
        ]
      });
      driverObj.drive();
      localStorage.setItem("driver_shown", true)
    }
  }, []);
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <img
          src="download.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Linkeion</span>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item profile-tab">
              <NavLink to="/profile" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Profile</p>
              </NavLink>
            </li>
            <li className="nav-item post-tab">
              <NavLink to="/createpost" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Create Post</p>
              </NavLink>
            </li>
            <li className="nav-item logout-tab">
            <NavLink to="/logout" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Logout</p>
            </NavLink>
          </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
