import React from 'react';
import { Link } from 'react-router-dom';
import { Images } from '../../assets/images';
import ScrollAnimation from 'react-animate-on-scroll';

const Banner = () => {
	return (
		<section className="page_slider text-center">
			<img src={Images.Baner123} alt="img" className='img-responsive' />
			<div className="container-fluid" style={{ backgroundColor: "#07322D", opacity: "0.8" }}>
				<div className="row">
					<div className="col-md-12  col-xs-12">
						<div className="ds cover-image s-overlay text-left">
							<div className="container px-xl-120 .s-py-md-30">
								<div className="row">
									<div className="col-md-12 col-xs-12">
										<div className="intro_layers_wrapper px-xl-50">
											<div className="intro_layers">
												<ScrollAnimation animateIn="fadeIn" initiallyVisible={true} duration={2}>
													<div className="intro_layer">
														<h2 className="text-capitalize intro_featured_word">
															<span className="color-main-title">Medilab&nbsp;</span>
															Healthcare Pvt Ltd
														</h2>
														<p className="intro_after_featured_word text-sm-left">
															Our brands provide a scientific avenue to successfully deal with varied health concerns related to both humans and animals.</p>
														<Link to="/contact" className="btn btn-maincolor2 medium-btn" >Contact Us</Link>
													</div>
												</ScrollAnimation>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner