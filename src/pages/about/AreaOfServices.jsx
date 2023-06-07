import React from 'react';
import { Images } from '../../assets/images';
import ScrollAnimation from 'react-animate-on-scroll';

const AreaOfServices = () => {
    return (
        <section class="ds s-parallax s-overlay s-py-xl-150 s-py-lg-130 s-py-md-90 s-py-60">
            <div class="container ">
                <div class="row px-xl-50">
                    <div className="col-md-6 ">
                        <img src={Images.Branch_1} />
                    </div>
                    <div class="col-md-6">
                        <h3 className='text-left mt-5'>Areas of Service</h3>
                        <ScrollAnimation animateIn="slideInRight" initiallyVisible={true} duration={2}>
                            <ul class="list-styled">
                                <li>Pharmaceutical Products Manufacturing</li>
                                <li>Ayurvedic / Herbal Products Manufacturing</li>
                                <li>Neutraceutical Products Manufacturing</li>
                                <li>Contact Manufacturing</li>
                                <li>Technical consultancy</li>
                                <li>Turnkey project of manufacturing facility</li>
                                <li>Technical trainings and manpower development</li>
                                <li>Trained man power supply</li>
                            </ul>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AreaOfServices