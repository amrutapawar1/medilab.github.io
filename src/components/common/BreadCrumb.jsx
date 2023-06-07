import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../routes/RoutePaths';


const BreadCrumb = (props) => {
    const navigate = useNavigate();
    return (
        <section className="page_title ds s-parallax s-overlay s-py-20">
            <div className="s-blur"></div>
            <div className="container px-xl-50">
                <div className="row">
                    <div className="col-md-12 text-center text-sm-left">
                        <h6>{props.label}</h6>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a onClick={() => navigate(RoutePath.home)} style={{cursor:"pointer"}}>Home</a>
                            </li>
                            <li className="breadcrumb-item active" style={{cursor:"pointer"}}>
                                {props.label}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BreadCrumb;
