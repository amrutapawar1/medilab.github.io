import React from 'react';
import { Icons } from "../../../src/assets/images/icons"

const Promotors = () => {
    return (
        <section className="ds s-parallax s-overlay section-features s-pt-xl-140 s-pt-lg-120 s-pt-md-80 s-pt-50 s-pb-xl-145 s-pb-lg-125 s-pb-md-85 s-pb-55 c-mb-30 text-center text-sm-left">
            <div className="container px-xl-50">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box text-center">
                            <div className="icon-styled fs-60 color-main2">
                                <img src={Icons.relaxation} alt="" style={{ height: "70px" }} />
                            </div>
                            <h6 className="text-uppercase">Promotes relaxation</h6>
                            <p>
                                Cannabis and cannabinoid drugs are widely used to treat disease or alleviate symptoms.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box text-center">
                            <div className="icon-styled fs-60 color-main2">
                                <i className="icon-fonts icon-food" style={{ height: "70px" }}></i>
                            </div>
                            <h6 className="text-uppercase">Increases appetite</h6>
                            <p>
                                To conduct a systematic review of the benefits and adverse events of cannabinoids.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box text-center">
                            <div className="icon-styled fs-60 color-main2">
                                <img src={Icons.ayurveda} alt="" style={{ height: "70px" }} />
                            </div>
                            <h6 className="text-uppercase">Relieves pain</h6>
                            <p>
                                Patient-relevant/disease-specific outcomes, activities of daily living, quality of life.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="icon-box text-center">
                            <div className="icon-styled fs-60 color-main2">
                                <img src={Icons.headache} alt="" style={{ height: "70px" }} />
                            </div>
                            <h6 className="text-uppercase">Removes headache</h6>
                            <p>
                                Medical cannabis refers to the use of cannabis as medical therapy to treat disease.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt--30"></div>
            </div>
        </section>
    )
}

export default Promotors