import React,{ useState } from 'react'
import InquiryForm from '../../pages/product/product/InquiryForm';

const StickyForm = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <button className='btn-sm contact-btn'  onClick={handleShow} style={{ cursor: "pointer" }}> <i class="fas fa-download"></i></button>
            <InquiryForm show={show} setShow={setShow} />
        </>
    )
}

export default StickyForm