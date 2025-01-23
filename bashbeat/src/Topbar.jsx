import React from 'react'
import './Topbar.css'
import 'antd/dist/reset.css'; 
import logo from './assets/logo.png'


const Topbar = () => {
  return (
    <div className= ''>
      <nav className="navbar navbar-expand-lg bg-black">
  <div className="container-fluid">
  <div>
    <img className="size" src={logo} alt="tlogo"/>
    <a className="navbar-brand fs-2 fw-bolder text-danger hover" href="#" >Bass Beats</a>
  </div>
    <div className="collapse navbar-collapse  space " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-danger hom" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger lin" href="#">Link</a>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle text-danger bg-black dro" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu bg-black">
            <li><a className="dropdown-item text-danger " href="#">Action</a></li>
            <li><a className="dropdown-item text-danger " href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item text-danger " href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-danger disa" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Topbar;


