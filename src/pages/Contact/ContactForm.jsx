import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
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
        .required("This Field Is Required"),
      email: Yup.string()
        .email("Please provided valid email")
        .required("This Field Is Required"),
      phone: Yup.string()
        .required("This Field Is Required")
        .matches(/\+?\d[\d -]{8,12}\d/, "Mobile Is Not Valid"),
      message: Yup.string().required("This Field Is Required"),
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
            toast.success("Form Submitted Successfully");
          },
          (error) => {
            toast.error("Please fill the form");
          }
        );
      resetForm({ values: "" });
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="contact-form content-center c-mb-100 c-gutter-100"
      >
        <label htmlFor="fullName"></label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
        <br />
        <div className="text-danger">
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
        <div className="text-danger">
          {formik.touched.email && formik.errors.email}
        </div>
        <br />
        <label htmlFor="phone"></label>
        <input
          id="phone"
          name="phone"
          type="number"
          placeholder="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <br />
        <div className="text-danger">
          {formik.touched.phone && formik.errors.phone}
        </div>
        <br />
        <textarea
          id="message"
          name="message"
          type="text"
          placeholder="message"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        <br />
        <div className="text-danger">
          {formik.touched.message && formik.errors.message}
        </div>
        <button type="submit" style={{cursor:"pointer"}}>Submit</button>
        <ToastContainer position="top-right" closeOnClick="false" />
      </form>
    </>
  );
};

export default ContactForm;
