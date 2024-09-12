import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      work: "",
      message: "",
      acceptTerms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      work: Yup.string().required("Please select a work type"),
      message: Yup.string().required("Message is required"),
      acceptTerms: Yup.boolean().oneOf([true], "Accepting terms is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      sendEmail(values, resetForm);
    },
  });
  const sendEmail = (values, resetForm) => {
    const templateParams = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      work: values.work,
      message: values.message,
    };
    emailjs
      .send(
        "service_cfxddtn",
        "template_7n7lppr",
        templateParams,
        "I_D4jj2Q23ZNG40IQ"
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          resetForm();
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          If you have any projects, collaborations, or opportunities that align
          with my skills, I'd love to hear from you. <br /> Let's work together
          to create something amazing!.
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error">{formik.errors.firstName}</div>
            ) : null}
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="error">{formik.errors.lastName}</div>
            ) : null}
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phoneNumber"
              id="phoneNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />

            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="error">{formik.errors.phoneNumber}</div>
            ) : null}
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a work</span>
          <select
            id="work"
            name="work"
            className="contact--input text-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.work}
          >
            <option>Select One...</option>
            <option>Front-End</option>
            <option>Back_End</option>
            <option>Full Stack</option>
            <option>Debug</option>
          </select>
          {formik.touched.work && formik.errors.work ? (
            <div className="error">{formik.errors.work}</div>
          ) : null}
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.acceptTerms}
          />
          <span className="text-sm">I accept the terms</span>
          {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
            <div className="error">{formik.errors.acceptTerms}</div>
          ) : null}
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
