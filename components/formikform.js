import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const validtionSchema = yup.object().shape({
  username: yup.string().required("Please enter your name"),
  password: yup.string().required("Please enter your pass"),
  email: yup
    .string()
    .email("Please enter a valid Email")
    .required("email is required"),
});
function Formikform() {
  const { errors, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validationSchema: validtionSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div class='w-full max-w-xs'>
      <form
        class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={handleSubmit}
      >
        <div class='mb-4'>
          <label
            class='block text-gray-700 text-sm font-bold mb-2'
            for='username'
          >
            Username
          </label>
          <input
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Username'
            name='username'
            onChange={handleChange}
            value={values.username}
          />
        </div>
        <p>{errors.username}</p>
        <div class='mb-6'>
          <label
            class='block text-gray-700 text-sm font-bold mb-2'
            for='password'
          >
            Password
          </label>
          <input
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='******************'
            onChange={handleChange}
            name='password'
            value={values.password}
          />
          <p class=' text-xs italic'>Please choose a password.</p>
        </div>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            name='email'
            type='email'
            onChange={handleChange}
            value={values.email}
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <p>{errors.email}</p>
        <div class='flex items-center justify-between'>
          <button
            class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Sign In
          </button>
        </div>
      </form>
      <p class='text-center text-gray-500 text-xs'>
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}

export default Formikform;
