import React from 'react';
import Gallery from './Gallery';

const Pramotor = () => {
    return (
        <section className="ls shop-categories-section s-pt-xl-30 s-pt-lg-115 s-pt-md-75 s-pt-55 s-pb-xl-10 s-pb-lg-125 s-pb-md-85 s-pb-55">
            <div className="container px-xl-50">
                <div className="row">
                    <div className="col-12">
                        <h6 className="special-heading sub-title text-center"><span>Try Our Exclusive Range of</span></h6>
                        <h2 className="special-heading text-center">Confectionery (Hand Candies) <br />8 Stunning Flavours</h2>
                        <h5 className="text-center">"Orange, Kaccha Aam, Mint, Imli, Coffee, Chocolate, Mango, Pan Masala"</h5>
                        <div className="divider-50 hidden-below-md"></div>
                        <div className="divider-30 hidden-above-md"></div>
                        <Gallery />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pramotor