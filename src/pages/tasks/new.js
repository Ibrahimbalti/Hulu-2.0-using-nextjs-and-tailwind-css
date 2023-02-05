import React, { useState } from "react";
import { useRouter } from "next/router";

function NewTask() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const { title, description } = formData;
  console.log(title);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello", formData);
    await getRecipes();
  };

  const creatNewTask = async () => {
    // try {
    //   await fetch("http://localhost:3000/api/tak"),
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     };
    // } catch (error) {
    //   console.log(error);
    // }
  };

  function getRecipes() {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      }, // or remove this headers section
      body: JSON.stringify(formData),
    };
    const response = fetch("/api/task", options);
    console.log(response);
  }

  return (
    <>
      <form class='w-full max-w-sm' onSubmit={handleSubmit}>
        <div class='md:flex md:items-center mb-6'>
          <div class='md:w-1/3'>
            <label
              class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              for='inline-full-name'
            >
              Title
            </label>
          </div>
          <div class='md:w-2/3'>
            <input
              class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='inline-full-name'
              type='text'
              value={title}
              name='title'
              onChange={handleChange}
            />
          </div>
        </div>
        <div class='md:flex md:items-center mb-6'>
          <div class='md:w-1/3'>
            <label
              class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              for='inline-password'
            >
              Descritpion
            </label>
          </div>
          <div class='md:w-2/3'>
            <input
              class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='inline-password'
              type='text'
              value={description}
              name='description'
              onChange={handleChange}
            />
          </div>
        </div>

        <div class='md:flex md:items-center'>
          <div class='md:w-1/3'></div>
          <div class='md:w-2/3'>
            <button
              class='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default NewTask;
