import React from 'react';
import { Images } from '../assets/images';
import BreadCrumb from '../components/common/BreadCrumb';
import StickyForm from '../components/common/StickyForm';

const CorporateSocialResponsibility = () => {
  return (
    <>
      <BreadCrumb label="Corporate Social Responsibility" />
      <section className="ls no-sidebar s-py-60 c-gutter-60">
        <div className="container px-xl-50">
          <div className="row">
            <main className="col-lg-8 col-md-8 col-xs-12 col-sm-12 align-self-center">
              <article className="vertical-item mr-2 single-post post type-post status-publish format-standard has-post-thumbnail">
                <div className="item-content">
                  <div className="entry-content">
                    <blockquote>
                      <p className='text-justify'>
                        We, Medilab Healthcare Pvt Ltd, have the mission to provide cost-effective pharmaceutical products to each individual, regardless of race, gender, social or cultural background. We also firmly believe and follow that Every Life is Precious.
                        <br /><br />In addition to providing medicines at affordable rates, we strive to improve overall well-being of Society, as our integral part of Corporate Social Responsibility. We continuously work towards making good health affordable and accessible to the communities and society at large. We help as many people as we can to ensure their right to good health and general well-being.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </article>
            </main>
            <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 align-self-center">
              <img src={Images.CSR} className="img-thumbnail img-responsive" alt='csr image' />
            </div>
          </div>
        </div>
      </section>
      <StickyForm/>
    </>
  )
}

export default CorporateSocialResponsibility