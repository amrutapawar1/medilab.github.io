import React from 'react';
import BreadCrumb from '../../../components/common/BreadCrumb';
import StickyForm from '../../../components/common/StickyForm';
import Pramotor from './Pramotor';
import ProductList from './ProductList';
import TableList from './TableList';

const Product = () => {
  return (
    <>
      <BreadCrumb label="Product"/>
      <ProductList />
      <Pramotor/>
      <TableList/>
      <StickyForm  />
    </>
  )
}

export default Product