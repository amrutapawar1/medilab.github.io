import React from "react";
import { Icons } from "../../assets/images/icons";

const Why_ChooseUS = () => {
  return (
    <section className="ls s-py-xl-150 s-py-lg-130 s-py-md-90 s-py-60 px-xl-50">
      <div className="container px-xl-50">
        <div className="row">
          <div className="className col-12">
            <div className="isotope-wrapper services isotope c-mb-30 row masonry-layout">
              <h2 className="special-heading text-center">Why Choose Us</h2>
              <h6 className="special-heading sub-title text-center">
                <span>We care the world</span>
              </h6>
              <div className="divider-40 hidden-below-md "></div>
              <div className="divider-30 hidden-above-md"></div>
              <div className="isotope-item col-xl-4 col-md-6 col-12">
                <div className="vertical-item ">
                  <div className="item-media">
                    <img src={Icons.passion} alt="img" style={{ width: "80px", height: "80px" }} />
                  </div>
                  <div className="item-content">
                    <h5>We Are Passionate</h5>
                    <p className='text-justify'>
                      we are passionate about science and driven to always care
                      the wold first We promise to our patients and customers,
                      environment and other stakeholders on being a leader in
                      the worldwide pursuit of trusted Medicines. We operate
                      with effective governance and high standards of ethical
                      behavior. Through our passion and commitment, we seek to
                      leverage our technologies in drug development and
                      delivery, as well as our operational expertise; to help
                      others achieve a better quality of life.
                    </p>
                  </div>
                </div>
              </div>
              <div className="isotope-item col-xl-4 col-md-6 col-12">
                <div className="vertical-item">
                  <div className="item-media">
                    <img src={Icons.quality} alt="img" style={{ width: "80px", height: "80px" }} />
                  </div>
                  <div className="item-content">
                    <h5>Quality Standard And Management</h5>
                    <p className='text-justify'>
                      Our manufacturing of products takes place under Schedule M
                      units. Impressive track record is set by us by delivering
                      result-oriented product range. We focused on meeting the
                      demands of the customers and this ultimately leads to
                      quality assurance. With the customer-centric approach, our
                      team make sure to manufacture superior quality
                      medications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="isotope-item col-xl-4 col-md-6 col-12">
                <div className="vertical-item">
                  <div className="item-media">
                    <img src={Icons.improve} alt="img" style={{ width: "80px", height: "80px" }} />
                  </div>
                  <div className="item-content">
                    <h5>We Are Always Improving</h5>
                    <p className='text-justify'>
                      Our research and development team is an integral part of
                      our organization, which is continuously working on the
                      development of of Medicines. The technical capabilities of
                      our scientists further help us in manufacturing our
                      products in accordance with the GMP and WHO-GMP quality
                      standards. Our R&D team carries out surveys in the
                      national and international pharmaceuticals markets, which
                      help us to improvise our existing range of products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt--30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why_ChooseUS;
