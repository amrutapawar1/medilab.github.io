import React from 'react';
import { Images } from '../../assets/images';
import { Link, useNavigate } from 'react-router-dom';
import { companyInfo } from '../../constants/ContactInfo';
import { RoutePath } from '../../routes/RoutePaths';
import ScrollAnimation from 'react-animate-on-scroll';
// import { useTranslation } from 'react-i18next';

// const lngs = {
//   en: { nativeName: 'English' },
//   de: { nativeName: 'Deutsch' }
// };

// When the user scrolls down 20px from the top of the document, show the button

const PageFooter = () => {
	const navigate = useNavigate();
	// const { i18n } = useTranslation();
	return (<>

		<footer className="page_footer text-center text-sm-left  ds ms s-pt-60 s-pb-60 s-pt-md-85 s-pb-md-90 s-pt-lg-125 s-pb-lg-130 s-pt-xl-150 s-pb-xl-145 c-gutter-30 s-parallax c-mb-50 c-mb-lg-0">
			<div className="container px-xl-50">
				<div className="row justify-content-center">
					<div className="col-lg-5 col-md-6 col-sm-12 col-xs-12" >
						<ScrollAnimation animateIn="fadeInLeft" initiallyVisible={true} duration={2} >
							<a onClick={() => navigate(RoutePath.home)} className="logo">
								<img src={Images.Logo} alt="img" />
								<span className="d-flex flex-column">
									<span className="logo-text color-darkgrey">Medilab</span>
									<span className="logo-subtext">Healthcare Pvt Ltd</span>
								</span>
							</a>
							<p className='text-justify' style={{ letterpacing: "1px" }}>
								Driven by a mission to create a world of safe healthcare for a safer tomorrow, we are glad to introduce "MEDILAB' as a fully integrated pharmaceutical company with services extended from delivering Healthcare products to pharma mergers and acquisitions.
							</p>
						</ScrollAnimation>
					</div>
					<div className="col-lg-2 col-md-6 col-sm-12 col-xs-12" >
						<div className="widget widget_nav_menu mb-0 ">
							<ScrollAnimation animateIn="fadeInLeft" initiallyVisible={true} duration={3}>
								<h3 className="widget-title">Quick Links</h3>
								<ul className='list-unstyled'>
									<li>
										<Link to="/about">About Us</Link>
									</li>
									<li>
										<Link to="/product">Products</Link>
									</li>
									<li>
										<Link to="/global-presence">Global Presence</Link>
									</li>
									<li>
										<Link to="/csr">CSR</Link>
									</li>

									<li>
										<Link to="/contact">Contact US</Link>
									</li>
								</ul>
							</ScrollAnimation>
						</div>
					</div>
					<div className="col-lg-5 col-md-12 mb-0 col-sm-12 col-xs-12">
						<div className="widget widget_icons_list">
							<ScrollAnimation animateIn="fadeInLeft" initiallyVisible={true} duration={4}>
								<h3 className="widget-title">Contact info</h3>
								<ul>
									<li className="icon-inline">
										<div className="icon-styled icon-top color-main fs-14">
											<i className="fa fa-map-marker"></i>
										</div>
										<p className='px-2 text-align-justify' >{companyInfo.address} </p>
									</li>
									<li className="icon-inline">
										<div className="icon-styled icon-top color-main fs-14">
											<i class="fa fa-phone"></i>
										</div>
										<p className='px-2'>{companyInfo.contactNo}</p>
									</li>
									<li className="icon-inline">
										<div className="icon-styled icon-top color-main fs-14">
											<i className="fa fa-envelope"></i>
										</div>
										<Link to={companyInfo.email} target="_blank" className='px-2'>{companyInfo.email}</Link>
									</li>
								</ul>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<section className="page_copyright ds ms s-py-15 s-bordertop">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-12 text-center" >
						<p>&copy; Copyright <span className="copyright_year">2022 Medilab</span> All Rights Reserved</p>
					</div>
				</div>
			</div>
		</section>

		{/* <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div> */}

	</>
	)
}

export default PageFooter;