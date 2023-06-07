import React from 'react';
import { Images } from '../../assets/images';

const Pramotors = () => {
	return (
		<section className="page_title ds s-parallax s-overlay ">
			<div className="s-blur"></div>
			<div className="container px-xl-50">
				<div className="row">
					<div className="col-md-6 text-center text-sm-left">
						<h4 className='text-left mt-5'>Ayurvedic with Lozenges Facility</h4>
						<p className='text-justify'>Driven by a mission to create a world of safe healthcare for a safer tomorrow, we are glad to introduce "MEDILAB' as a fully integrated pharmaceutical company with services extended from delivering Healthcare products to pharma mergers and acquisitions.</p>
						<p className='text-justify'>We are specilized in Ayurvedic Innovative formulations all our Ayurvedic products and formulations are from our own manufacturing plant situated in Paithan,Aurangabad, Maharashtra.
							This is the most advanced manufacturing facility designed on the guidelines of cGMP.</p>
						<p className='mb-3'>Paithan MIDC Aurangabad Plant Is Designed to meet Schedule "T" guideline</p>
					</div>
					<div className="col-md-6 text-center text-sm-right mb-3">
						<img src={Images.Branch_1} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Pramotors