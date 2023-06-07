import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import ContactForm from "../Contact/ContactForm";

const Partnership = () => {
  return (
    <>
      <BreadCrumb label="Responsible Partnership" />
      <section className="ls s-py-xl-150 s-py-lg-130 s-py-md-90">
        <div className="container px-xl-50">
          <div className="row">
            <main className="col-lg-7 col-xl-6">
              <div className="vertical-item content-padding text-left pt-5 mr-2">
                <div className="item-content">
                  <blockquote>
                    <p className='text-justify'>
                      We believe in forging long term relationships by being
                      transparent, trustworthy and accountable. Our dedicated
                      Partnership Management Team is committed to be responsive to
                      client’s requirements, through smooth communication and
                      seamless integration at all stages of the project.
                    </p>
                    <p className='text-justify'>
                      Young and agile firm focused on accelerated execution
                      World-className R&D and manufacturing facilities Strong team
                      of researchers and business leaders fuelling innovation and
                      efficiency Wide array of delivery systems Strict adherence
                      to GMP & ‘Quality by Design’ processes
                    </p>
                  </blockquote>
                </div>
              </div>
            </main>
            <aside className="col-lg-5 col-xl-6 affix-aside">
              <div className="widget widget_categories text-align-center">
                <h3 className="widget-title">Contact Us</h3>
                <ContactForm />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partnership;
