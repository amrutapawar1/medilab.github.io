import React from 'react';
import { Images } from '../../assets/images';

const Clients = () => {
	return (
		<section className="ls container-px-0 s-py-70 px-xl-50">
			<div className="container">
				<h6 className="special-heading sub-title text-center"><span>Our Valuable Clients</span></h6>
				<div className="row">
					<div className="col-sm-12 text-center">
						<div className="row justify-content-center">
							<div className='col col-sm-2'>
								<img src={Images.Client_1} alt="img1" />
							</div>
							<div className='col col-sm-2'>
								<img src={Images.Client_2} alt="img" />
							</div>
							<div className='col col-sm-2'>
								<img src={Images.Client_3} alt="img" />
							</div>
							<div className='col col-sm-2'>
								<img src={Images.Client_4} alt="img" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Clients