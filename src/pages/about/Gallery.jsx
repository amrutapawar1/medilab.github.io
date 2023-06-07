import React from 'react';
import { Images } from '../../assets/images';

const Gallery = () => {
    return (
        <section className="ls section-portfolio s-pt-xl-140 s-pt-lg-120 s-pt-md-80 s-pt-50 s-pb-xl-150 s-pb-lg-130 s-pb-md-90 s-pb-60 text-center text-sm-left">
            <div className="container px-xl-50">
                <div className="row">
                    <div className="col-12">
                        <h2 className="special-heading text-center">Photo Gallery</h2>
                        <h6 className="special-heading sub-title text-center"><span></span></h6>
                        <div className="divider-50 hidden-below-md"></div>
                        <div className="divider-30 hidden-above-md"></div>
                    </div>
                </div>
                <div className="row isotope-wrapper portfolio masonry-layout c-gutter-10 c-mb-10">
                    <div className="col-md-3 corporate">
                        <div className="vertical-item item-gallery content-absolute text-center ">
                            <div className="item-media" style={{ borderRadius:"30px"}}>
                                <img src={Images.Ayurveda} alt="img" />
                            </div>
                            <div className="item-content">
                                <div className="icons-link">
                                    <a className="link-zoom photoswipe-link" title="" href={Images.Ayurveda}><i className="fa fa-search-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 entertainment innovations">
                        <div className="vertical-item item-gallery content-absolute text-center">
                            <div className="item-media" style={{ borderRadius:"30px"}}>
                                <img src={Images.Herbocosmetics} alt="img" />
                            </div>
                            <div className="item-content">
                                <div className="icons-link">
                                    <a className="link-zoom photoswipe-link" title="" href={Images.Herbocosmetics}><i className="fa fa-search-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="vertical-item item-gallery content-absolute text-center ">
                            <div className="item-media" style={{ borderRadius:"30px"}}>
                                <img src={Images.Nutraceutical} alt="img" />
                            </div>
                            <div className="item-content">
                                <div className="icons-link">
                                    <a className="link-zoom photoswipe-link" title="" href={Images.Nutraceutical}><i className="fa fa-search-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="vertical-item item-gallery content-absolute text-center ">
                            <div className="item-media" style={{ borderRadius:"30px"}}>
                                <img src={Images.Ayurveda} alt="img" />
                            </div>
                            <div className="item-content">
                                <div className="icons-link">
                                    <a className="link-zoom photoswipe-link" title="" href={Images.Ayurveda}><i className="fa fa-search-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb--10"></div>
            </div>
        </section>
    )
}

export default Gallery