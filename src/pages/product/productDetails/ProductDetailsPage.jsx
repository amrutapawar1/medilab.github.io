import React from 'react';
import BreadCrumb from '../../../components/common/BreadCrumb';
import ProductDetails from './ProductDetails';

const ProductDetailsPage = () => {
	return (
		<>
			<BreadCrumb label="Product Details" />
			<ProductDetails />
		</>
	)
}

export default ProductDetailsPage