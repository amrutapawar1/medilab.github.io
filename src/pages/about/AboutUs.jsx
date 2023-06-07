import React from 'react';
import About from '../home/About';
import Why_ChooseUS from './Why_ChooseUS';
import Gallery from './Gallery';
import LocationMap from './LocationMap';
import Pramotors from './Pramotors';
import BreadCrumb from '../../components/common/BreadCrumb';
import AreaOfServices from './AreaOfServices';
import OurMission from './OurMission';
import StickyForm from '../../components/common/StickyForm';

const AboutUs = () => {
	return (
		<>
			<BreadCrumb label="About Us" />
			<About />
			<Why_ChooseUS />
			<AreaOfServices />
			<Pramotors />
			<OurMission />
			<Gallery />
			<LocationMap />
			<StickyForm  />
		</>
	)
}

export default AboutUs