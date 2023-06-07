import React, { useState } from 'react'
import { ComprehensiveProductList } from '../../../constants/ProductCategory'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const TableList = () => {
    const [query, setQuery] = useState("");
    return (
        <section className="section-table  s-pt-xl-140 s-pt-lg-120 s-pt-md-80 s-pt-50 s-pb-xl-140 s-pb-lg-120 s-pb-md-70 s-pb-50" id="table1-15">
            <div className="container container-table px-xl-50">
                <h3 className="mbr-section-title mbr-fonts-style text-center">
                    Comprehensive Product List
                    <h6 className="special-heading sub-title text-center"><span></span></h6>
                </h3>
                <div>
                    <div className='col-md-3 offset-md-9 d-flex p-3'>
                        <input type='text' placeholder='Search' onChange={(e) => setQuery(e.target.value)} />
                        <ReactHTMLTableToExcel
                            id="test-table-xls-button"
                            className="download-table-xls-button"
                            table="table-to-xls"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText={<i className="fa fa-download" aria-hidden="true" style={{cursor:"pointer"}}></i>} />
                    </div>
                    <table id="table-to-xls" className="table table-striped woocommerce-orders-table woocommerce-MyAccount-orders shop_table shop_table_responsive my_account_orders account-orders-table">
                        <thead>
                            <tr>
                                <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-number"><span className="nobr">ProductName</span></th>
                                <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-date"><span className="nobr">Uses</span></th>
                                <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-status"><span className="nobr">Pack </span></th>
                                <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-total"><span className="nobr">PackSize</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ComprehensiveProductList.filter((product) =>(product.productName.toLowerCase().includes(query.toLowerCase())) || product.productName.toUpperCase().includes(query.toUpperCase())).map(item =>
                                    <tr className="woocommerce-orders-table__row woocommerce-orders-table__row--status-processing order" key={item.id}>
                                        <td className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" data-title="Order">
                                            {item.productName}
                                        </td>
                                        <td className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" >{item.uses}</td>
                                        <td className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" >{item.pack}</td>
                                        <td className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" >{item.packSize}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                        <caption>Showing&nbsp;{ComprehensiveProductList.length}&nbsp;Entries</caption>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default TableList;