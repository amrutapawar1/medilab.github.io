import React from 'react';
import MapCont from '../globalPresence/MapCont';

const LocationMap = () => {
    return (
        <section className="ls ms s-pt-xl-30 s-pt-lg-130 s-pt-md-90 s-pt-60 s-pb-xl-50 s-pb-lg-130 s-pb-md-90 s-pb-60 text-center text-sm-left">
            <div className="container px-xl-50">
                <div className="row">
                    <div className="col-lg-7">
                        <MapCont  />
                    </div>
                    <div className="col-lg-5">
                        <div className="divider-80 hidden-below-md hidden-above-lg"></div>
                        <div className="divider-50 hidden-above-md"></div>
                        <h6 className="special-heading sub-title align-self-center"><span>Our Global Presence</span></h6>
                        <h4 className="thin"> Medilab Healthcare Pvt Ltd. </h4>
                        <div className="divider-50 hidden-below-md"></div>
                        <div className="divider-30 hidden-above-md"></div>
                        <ul>
                            <li className="icon-inline">
                                <div className="icon-styled icon-top color-main fs-14">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <p>Medilab Healthcare Pvt. Ltd., Gat No. 64, Sawaradari, Opp. Philips, Chakan, Khed, Maharashtra, IN - 410 501</p>
                            </li>
                            <li className="icon-inline">
                                <div className="icon-styled icon-top color-main fs-14">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <p>+(91) 9545 185810</p>
                            </li>
                            <li className="icon-inline">
                                <div className="icon-styled icon-top color-main fs-14">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <p>
                                    <a>www.rmj@medilabs.in</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocationMap