import React from 'react';
import { Images } from '../../assets/images';
import ScrollAnimation from 'react-animate-on-scroll';

const Categories = () => {
    return (
        <section className="ls shop-categories-section post-type-archive-fw-team s-py-xl-150 s-py-lg-130 s-py-md-90 s-py-60 c-mb-50">
            <div className="container">
                <div className="row px-xl-50">
                    <h6 className="special-heading sub-title text-center"><span>Medilab</span></h6>
                    <h2 className="special-heading text-center">Areas of Service </h2>
                    <div className="divider-40 hidden-below-md"></div>
                    <div className="divider-30 hidden-above-md"></div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12  ">
                        <ScrollAnimation animateIn="slideInLeft" initiallyVisible={true} duration={2}>
                            <div className="vertical-item content-padding text-center">
                                <div className="item-media">
                                    <img src={Images.Ayurveda} alt="team" />
                                </div>
                                <div className="item-content">
                                    <p className="small-text"></p>
                                    <h4><a href="team-single.html">Ayurvedic </a></h4>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <ScrollAnimation animateIn="fadeIn" initiallyVisible={true} duration={3}>
                            <div className="vertical-item content-padding text-center">
                                <div className="item-media">
                                    <img src={Images.Herbocosmetics} alt="team" />
                                </div>
                                <div className="item-content">
                                    <p className="small-text"></p>
                                    <h4><a href="team-single.html">Herbocosmetics</a></h4>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <ScrollAnimation animateIn="slideInRight" initiallyVisible={true} duration={2}>
                            <div className="vertical-item content-padding text-center">
                                <div className="item-media">
                                    <img src={Images.Nutraceutical} alt="team" />
                                </div>
                                <div className="item-content">
                                    <p className="small-text"></p>
                                    <h4><a href="team-single.html">Nutraceuticals </a></h4>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories;