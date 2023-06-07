import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const OurMission = () => {
  return (
    <section className="ls ms s-pt-xl-140 s-pt-lg-120 s-pt-md-80 s-pt-50 s-pb-xl-145 s-pb-lg-125 s-pb-md-85 s-pb-55">
      <div className="container px-xl-50" style={{paddingBottom:"50px"}}>
        <div className="row">
          <div className="col-lg-12 text-center">
            <ScrollAnimation animateIn="fadeIn" initiallyVisible={true} duration={2}>
              <h3>Our Mission</h3>
              <h6 className="special-heading sub-title"><span></span></h6>
              <p className='text-justify'>We are passionate about science and driven to always care the world first.
                We promise our patients, customers, environment and others take holders on
                being a leaderin worldwide pursuit of trusted medicine.
                We operate with effective governance and high standards of ethical behavior.
                Through our passion and commitment, we seek to leverage our technologies in
                drug development and delivery, as well as our operational expertise ; to help
                others achieve a better quality of life.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurMission