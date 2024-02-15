import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

function Layout() {
    const navigate = useNavigate()
    useEffect(()=>{
        const data = localStorage.getItem('automation_linkedin')
        if(!data)
        navigate('/login')
    })
  return (
    <div className="wrapper">
        <Navbar/>
        <Sidebar/>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <Outlet/>
            </div>
          </div>
        </div>
        <Footer/>
      <aside className="control-sidebar control-sidebar-dark">
      </aside>
    </div>
  );
}

export default Layout;
