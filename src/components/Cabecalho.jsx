import { Link } from 'react-router-dom'
import { FaBars, FaComments, FaSearch, FaTimes, FaClock, FaStar, FaBell, FaEnvelope, FaUsers, FaFile, FaExpandArrowsAlt, FaThLarge } from 'react-icons/fa'

const Cabecalho = () => {
    return (
        <>
            <div>
                {/* Preloader */}
                <div className="preloader flex-column justify-content-center align-items-center">
                    <img className="animation__shake" src="/lte/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
                </div>
                {/* Navbar */}
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" data-widget="pushmenu" to="#" role="button">
                                <FaBars />
                            </Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link to="#" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link to="#" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                        {/* Navbar Search */}
                        <li className="nav-item">
                            <Link className="nav-link" data-widget="navbar-search" to="#" role="button">
                                <FaSearch />
                            </Link>
                            <div className="navbar-search-block">
                                <form className="form-inline">
                                    <div className="input-group input-group-sm">
                                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-navbar" type="submit">
                                                <FaSearch />
                                            </button>
                                            <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                                <FaTimes />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        {/* Messages Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <Link className="nav-link" data-toggle="dropdown" to="#">
                                <FaComments />
                                <span className="badge badge-danger navbar-badge">3</span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <Link to="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img src="lte/dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Brad Diesel
                                                <span className="float-right text-sm text-danger"><FaStar /></span>
                                            </h3>
                                            <p className="text-sm">Call me whenever you can...</p>
                                            <p className="text-sm text-muted"><FaClock className="mr-1" /> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </Link>
                                <div className="dropdown-divider" />
                                <Link to="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img src="lte/dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                John Pierce
                                                <span className="float-right text-sm text-muted"><FaStar /></span>
                                            </h3>
                                            <p className="text-sm">I got your message bro</p>
                                            <p className="text-sm text-muted"><FaClock  className="mr-1" /> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </Link>
                                <div className="dropdown-divider" />
                                <Link to="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img src="lte/dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Nora Silvester
                                                <span className="float-right text-sm text-warning"><FaStar /></span>
                                            </h3>
                                            <p className="text-sm">The subject goes here</p>
                                            <p className="text-sm text-muted"><FaClock  className="mr-1" /> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </Link>
                                <div className="dropdown-divider" />
                                <Link to="#" className="dropdown-item dropdown-footer">See All Messages</Link>
                            </div>
                        </li>
                        {/* Notifications Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <Link className="nav-link" data-toggle="dropdown" to="#">
                                <FaBell />
                                <span className="badge badge-warning navbar-badge">15</span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">15 Notifications</span>
                                <div className="dropdown-divider" />
                                <Link to="#" className="dropdown-item">
                                    <FaEnvelope className="mr-2" /> 4 new messages
                                    <span className="float-right text-muted text-sm">3 mins</span>
                                </Link>
                                <div className="dropdown-divider" />
                                <Link to="#" className="dropdown-item">
                                    <FaUsers className="mr-2" /> 8 friend requests
                                    <span className="float-right text-muted text-sm">12 hours</span>
                                </Link>
                                <div className="dropdown-divider" />
                                <Link to="#" className="dropdown-item">
                                    <FaFile className="mr-2" /> 3 new reports
                                    <span className="float-right text-muted text-sm">2 days</span>
                                </Link>
                                <div className="dropdown-divider" />
                                <Link to="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" data-widget="fullscreen" to="#" role="button">
                                <FaExpandArrowsAlt />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to="#" role="button">
                                <FaThLarge />
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* /.navbar */}
            </div>

        </>
    )
}

export default Cabecalho
