import React from 'react';
import BreadCrumb from '../components/common/BreadCrumb';
import StickyForm from '../components/common/StickyForm';

const QualityPolicy = () => {
  return (<>
    <BreadCrumb label="Quality Policy" />
    <section className="ls s-py-xl-150 s-py-lg-130 s-py-md-90 s-py-60">
      <div className="container px-xl-50">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="vertical-item content-padding bordered text-center">
              <div className="item-content text-justify">
                <h4>Quality Policy :</h4>
                <p>As fundamental element of our Company's Purpose and Mission, Medilab, is committed
                  for the delivery of safe and effective products to patients and consumers.</p>
                <p>To comply with this commitment, Medilab maintains a quality-oriented culture to
                  ensure the highest priority is placed on the safety, efficacy and reliability of our
                  products, the safety of our patients and consumers, the quality of data supporting
                  regulatory submissions, and interactions with our associates.</p>
                <p>Medilab leaders are committed to maintaining a quality culture with appropriate
                  systems and processes in place to drivequality-focused behaviours and ensure decision
                  Medilab based on what is best for product quality, patient and consumer safety, and
                  protectionof Medilab's reputationandbusiness.</p>
                <p>Each Employee and Management authorities in Medilab are accountable for ensuring
                  product quality, and patient and consumer safety.</p>
                <p>As part of Medilab's Quality Policy Compliance:<br />
                  Medilab's business is conducted in accordance with applicable quality regulations,
                  codes andstandards.</p>
                <p>Department Managers are accountable to ensure that procedures are in place that
                  adequately define the expectations for work that supports, or directly affects, product
                  quality, product registration and/or data that supports product quality or consumer
                  safety.</p>
                <p>All Employees and Workers have the appropriate education, training, skills and
                  experience to carry out their work competently, in accordance with applicable
                  regulations and Medilab policies and procedures.
                </p>
                <p>Records, documentation and data are managed in accordance with the expectations of
                  Good Documentation Practices and applicable regulations. Processes for rising issues
                  to ensure product integrity and patient and consumer safety are consistently in place.
                </p>
                <p><b>Sandeep Pekhale</b><br/>
                Technical Director<br/>
                Medilab Healthcare Pvt. Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <StickyForm />
  </>
  )
}

export default QualityPolicy