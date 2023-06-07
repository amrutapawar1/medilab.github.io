import React from 'react';

const Tabs = (props) => {
	const { description } = props;
	return (
		<div className="woocommerce-tabs wc-tabs-wrapper">
			<ul className="nav nav-tabs" role="tablist">
				<li className="nav-item">
					<a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Additional information</a>
				</li>
			</ul>
			<div className="tab-content">
				<div className="tab-pane active" id="tabs-1" role="tabpanel">
					<p >{props.description}</p>
				</div>
				<div className="tab-pane" id="tabs-2" role="tabpanel">
					<p>Second Panel</p>
				</div>
			</div>
		</div>
	)
}

export default Tabs