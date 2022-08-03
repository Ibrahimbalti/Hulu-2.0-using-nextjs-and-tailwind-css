import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function FormValidation() {
  let defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dob: "",
  };
  const validtionSchema = yup.object().shape({
    firstName: yup.string().required("First Name is Required"),
    gender: yup.string().required("Field is  Required"),
  });

  const handleSubmit = (values) => {
    console.log("values are", values);
  };

  return (
    <>
      <h1>Formik and Yub Validition Form</h1>
      <br />
      <br />
      <Formik
        initialValues={defaultValues}
        validationSchema={validtionSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            type='text'
            name='firstName'
            placeholder='Enter your first name'
          />
          <br />
          <small className='text-red-700'>
            <ErrorMessage name='firstName' />
          </small>
          <br />
          <br />
          <Field
            type='text'
            name='lastName'
            placeholder='Enter your last name'
          />
          <br />
          <br />
          <Field type='text' name='email' placeholder='Enter your email' />
          <br />
          <br />
          <Field component='select' name='gender'>
            <option disabled value=''>
              select the value
            </option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </Field>
          <br />
          <small>
            <ErrorMessage name='gender' />
          </small>
          <br />
          <br />
          <Field type='file' name='image' />
          <br />
          <br />
          <Field type='date' name='dob' />
          <br />
          <br />
          <button type='submit' className='px-3 py-2 bg-red-500'>
            Submited
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default FormValidation;
