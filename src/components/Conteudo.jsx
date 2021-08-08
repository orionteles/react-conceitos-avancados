import React from 'react'
import Routes from '../Routes'
import { Link } from 'react-router-dom'

const Conteudo = () => {
    return (
        <>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="#">Home</Link> </li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">

                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            <section className="col-lg-12 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            <i className="fas fa-chart-pie mr-1" />
                                            Sales
                                        </h3>
                                        <div className="card-tools">
                                            <ul className="nav nav-pills ml-auto">
                                                <li className="nav-item">
                                                    <Link className="nav-link active" to="#" data-toggle="tab">Area</Link> 
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="#" data-toggle="tab">Donut</Link> 
                                                </li>
                                            </ul>
                                        </div>
                                    </div>{/* /.card-header */}
                                    <div className="card-body">
                                        <div className="tab-content p-0">
                                            <Routes />
                                        </div>
                                    </div>{/* /.card-body */}
                                </div>
                                {/* /.card */}
                            </section>
                            {/* /.Left col */}
                        </div>
                        {/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}

        </>
    )
}

export default Conteudo
