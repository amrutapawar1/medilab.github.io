import React from 'react';
import CartItems from './CartItems';

const TopHeader = () => {
  return (
    <section className="page_topline topline-1 ls s-borderbottom py-9">
      <div className="top-header">
        <CartItems />
      </div>
    </section>
  )
}

export default TopHeader