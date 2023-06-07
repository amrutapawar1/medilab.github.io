import React from 'react'
import BreadCrumb from '../../components/common/BreadCrumb'
import StickyForm from '../../components/common/StickyForm'

const ContractManufacturing = () => {
  return (<>
    <BreadCrumb label="Contract Manufacturing & Loan Licensing" />
    <section className="ls s-py-xl-150 s-py-lg-130 s-py-md-90 s-py-60">
      <div className="container px-xl-50">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="vertical-item content-padding bordered text-center">
              <div className="item-content text-justify">
                <h4>Contract Manufacturing & Loan Licensing</h4>
                <p>
                  We provide holistic and comprehensive contract manufacturing solutions for a wide range of clientele ranging from established brands to upcoming companies. Through our systemized manufacturing process, we make sure that we meet the manufacturing targets of our invaluable clients while quality is taken care of by our optimized plant set- up.
                </p>
                <p>
                  We provide effective and time proven Ayurvedic formulations for wide array of indications & symptoms. We source the required raw materials from only certified suppliers of herbs & extracts which further assures the quality of final products. Every single order, big or small, is given due importance & attended to personally, to make quality an obvious thing along with order fulfilment within the stipulated time. We work for customer delight by exceeding their expectations.
                </p>
                <p>
                  We have set our target to be the best herbal product manufacturer in the world. Contact us to get the excellent solution to your manufacturing needs. Our Contract Manufacturing client’s needs from beginning to end, with services to support material procurement, process optimization & formulation.
                </p>
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

export default ContractManufacturing