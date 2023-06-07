import React, { useState } from 'react'
import * as Yup from "yup";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import { Modal } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";

const InquiryForm = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  const [value, setValue] = useState('personal');

  const onChange = (e) => {
      setValue(e.target.value)
  }
  const formik = useFormik({
      initialValues: {
          fullName: "",
          email: "",
          phone: "",
          message: "",
      },
      validationSchema: Yup.object({
          fullName: Yup.string()
              .min(2, "Too Short!")
              .max(50, "Too Long!")
              .required("This Field Is Required")
              .matches(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/, "Name is not valid")
              .nullable(true),
          email: Yup.string()
              .required("Email Id is required")
              .matches(/^[a-zA-Z0-9+.]+@[a-zA-Z0-9.-]+$/, "Email Id  is not valid")
              .nullable(true),
          phone: Yup.string().required("This Field Is Required")
              .matches(/^(0|[+91]{3})?[7-9][0-9]{9}$/, "Mobile Is Not Valid"),
          message: Yup.string(),
      }),
      onSubmit: (values, { resetForm }) => {
          emailjs
              .send(
                  "service_ral2mn9",
                  "template_2plhftb",
                  values,
                  "-xOlH7xwHAmY0Atbk"
              )
              .then(
                  (result) => {
                      console.log(result.status, result.text);
                      toast("Form Submitted Successfully");
                      downloadBrochure();
                      handleClose();
                  },
                  (error) => {
                      console.log(error.result, error.text);
                      toast("Please fill the form");
                  }
              );
          resetForm({ values: "" });
      },
  });

  const downloadBrochure = () => {
      fetch('Medilab Brochure R.pdf').then(response => {
          response.blob().then(blob => {
              const fileURL = window.URL.createObjectURL(blob);
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'Medilab Brochure R.pdf';
              alink.click();
          })
      })
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Inquiry Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="personal" id="personal" value='personal' onChange={onChange} checked={value === 'personal'} />
                            <label className="form-check-label" for="personal" style={{ cursor: "pointer" }}>Personal</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="corporate" id="corporate" value='corporate' onChange={onChange} checked={value === 'corporate'} />
                            <label className="form-check-label" for="corporate" style={{ cursor: "pointer" }}>Corporate</label>
                        </div>

                    </div>

                    <form
                        onSubmit={formik.handleSubmit}
                        className="contact-form c-mb-100 c-gutter-100"
                    >
                        <label htmlFor="fullName"></label>

                        {
                            value == 'personal' ? (
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    placeholder="Name"
                                    onChange={formik.handleChange}
                                    value={formik.values.fullName}
                                />)
                                : (
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        placeholder="Organization Name"
                                        onChange={formik.handleChange}
                                        value={formik.values.fullName}
                                    />)
                        }

                        <br />
                        <div className="form-text-danger ">
                            {formik.touched.fullName && formik.errors.fullName}
                        </div>
                        <br />
                        <label htmlFor="email"></label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="@email.com"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <br />
                        <div className="form-text-danger ">
                            {formik.touched.email && formik.errors.email}
                        </div>
                        <br />
                        <label htmlFor="phone"></label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Phone"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        <br />
                        <div className="form-text-danger ">
                            {formik.touched.phone && formik.errors.phone}
                        </div>
                        <br />
                        <textarea
                            id="message"
                            name="message"
                            type="text"
                            placeholder="Leave message here, if any"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        />
                        <br />
                        <div className="form-text-danger ">
                            {formik.touched.message && formik.errors.message}
                        </div>
                        <div className="text-right pb-0 modal-footer">
                            <button type="submit" data-dismiss="modal" className="product_type_simple text-center" style={{ cursor: "pointer" }} >Submit<i className="fa fa-download" style={{ marginLeft: "0.5rem" }}>&nbsp;</i></button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
    </>
  );
};
export default InquiryForm;