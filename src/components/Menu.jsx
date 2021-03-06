import { BiCircle } from 'react-icons/bi'
import { FaTachometerAlt, FaAngleLeft, FaTh } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <Link to="#" className="brand-link">
                    <img src="lte/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </Link> 
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item menu-open">
                                <Link to="#" className="nav-link active">
                                    <FaTachometerAlt className="nav-icon" />
                                    <p>  Dashboard <FaAngleLeft className="right nav-icon" /> </p>
                                </Link> 
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="#" className="nav-link active">
                                            <BiCircle className="nav-icon" /> 
                                            <p> Dashboard v1</p>
                                        </Link> 
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#" className="nav-link">
                                            <BiCircle className="nav-icon" /> 
                                            <p> Dashboard v2</p>
                                        </Link> 
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#" className="nav-link">
                                            <BiCircle className="nav-icon" />
                                            <p> Dashboard v3</p>
                                        </Link> 
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <FaTh className="nav-icon" />
                                    <p> Widgets <span className="right badge badge-danger">New</span></p>
                                </Link> 
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>

        </>
    )
}

export default Menu
