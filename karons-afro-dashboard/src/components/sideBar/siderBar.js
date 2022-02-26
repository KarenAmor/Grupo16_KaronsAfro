import React from 'react';
import logo from '../../img/logo.jpg';
import {Link} from 'react-router-dom';

function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">


            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100" src={logo} alt="Digital House" />
                </div>
            </Link>


            <hr className="sidebar-divider my-0" />

            
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - KaronsAfros</span>
                </Link>
            </li>


            <hr className="sidebar-divider" />


            <div className="sidebar-heading">Paneles</div>


            <li className="nav-item">
                <Link className="nav-link collapsed" to="/lastMovie">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Lista de productos</span>                    
                </Link>
            </li>


            <li className="nav-item">
                <Link className="nav-link" to="/genres">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Lista de usuarios</span>
                </Link>
            </li>


            <li className="nav-item">
                <Link className="nav-link" to="/tables">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Categorías</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/tables">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Último producto registrado</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/tables">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Productos por categorías</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/tables">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tabla de productos</span>
                </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
}

export default SideBar;