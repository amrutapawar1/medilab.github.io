import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section id="about" className="ls section-about s-pt-xl-140 s-pt-lg-120 s-pt-md-80 s-pt-50 text-center text-sm-left">
            <div className="container px-xl-50">
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="special-heading sub-title"><span>Who We Are?</span></h6>
                        <h2 className="special-heading">History About Medilab</h2>
                        <div className="divider-45 hidden-below-md"></div>
                        <div className="divider-30 hidden-above-md"></div>
                        <p className='text-justify'>MEDILAB HEALTHCARE is a research-focused formulation firm established in MUMBAI, India to produce complex generics of the highest quality. Our efforts are specially focused on Ayurvedic, Nutraceuticals,Pharmaceuticals, as well as novel drug delivery platforms.</p>
                        <p className='text-justify'>We consider superior manufacturing to be truly critical for success. We strive to meet and exceed regulatory standards to deliver products that are consistently of higher quality. We build lasting partnerships on a foundation of reliability, integrity, transparency and responsiveness.</p>
                        <div className="divider-50 hidden-below-md"></div>
                        <div className="divider-30 hidden-above-md"></div>
                        {/* <Link to="/about" className="btn btn-maincolor medium-btn">learn more</Link> */}
                    </div>
                    <div className='col-md-6 col-sm-12 col-lg-6 col-xs-12 about-img'>
                        {/* <img src={Images.b14} className="center d-block-none"/> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About