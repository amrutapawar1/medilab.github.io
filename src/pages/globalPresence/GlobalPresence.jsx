import React from 'react';
import StickyForm from '../../components/common/StickyForm';
import MapCont from './MapCont';

const GlobalPresence = () => {
  return (<>
    <section className="ls shop-categories-section s-pt-lg-115 s-pt-md-75 s-pt-55 s-pb-xl-145 s-pb-lg-125 s-pb-md-85 s-pb-55">
      <div className="container px-xl-50">
        <div className="row" >
          <div className="col-12">
            <h2 className="special-heading text-center ">Global Presence</h2>
            <div className="divider-30 hidden-below-md"></div>
            <em  className='text-justify ml-4'>
              MEDILAB HEALTHCARE creating footprints with Quality product presence in India as well as several countries in the continents of AFRICA , Asia and CIS.
            </em>
            <div className="divider-50 hidden-below-md"></div>
            <div className="divider-30 hidden-above-md"></div>
            <div className="row ml-18">
              <div className="col-md-12 col-sm-12" style={{marginLeft:"21px", paddingBottom: "1rem"}}>
                <MapCont />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <StickyForm  />
    </>
  )
}

export default GlobalPresence