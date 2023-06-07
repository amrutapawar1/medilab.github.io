import React from "react";
import { Images } from "../../assets/images";
import BreadCrumb from "../../components/common/BreadCrumb";
import { companyInfo } from "../../constants/ContactInfo";
import MapContainer from "../mapContainer/MapContainer";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <>
      <BreadCrumb label="Contact Us" />
      <section className="ls s-py-md-90 s-py-20 s-pb-0 c-mb-30 c-gutter-30">
        <div className="container px-xl-50">
          <div className="row">
            <div className="col-lg-7" style={{textAlign:"-webkit-center"}}>
              <div className="row pb-40">
                <div className="col-md-6 ">
                  <div className="media text-center text-sm-left ">
                    <div className="icon-styled color-main fs-28">
                      <img src={Images.Icons_3} alt="" />
                    </div>
                    <div className="media-body">
                      <h5>Email Adress</h5>
                      <p>{companyInfo.email}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="media text-center text-sm-left ">
                    <div className="icon-styled color-main fs-28">
                      <img src={Images.Icons_4} alt="" />
                    </div>
                    <div className="media-body">
                      <h5>Phone</h5>
                      <p>
                        {companyInfo.contactNo} <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <section className="page_map" >
                <MapContainer />
              </section>
            </div>
            <div className="col-lg-5 contact-us" >
              <h4 className="special-heading text-center text-capitalize">Contact us</h4>
              <h6 className="special-heading sub-title text-center">
                <span></span>
              </h6>
              <p className="special-heading text-center">Have You any Questions? Ask Us!</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactUs;
