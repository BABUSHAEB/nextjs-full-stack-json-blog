"use client";
import { Router } from "next/router";
import React, { useState } from "react";

export default function BlogsForm({ PostData }) {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState();
  const [formData, setFormData] = useState({
    author: "",
    description: "",
    metadesc: "",
    category: "",
    heading: "",
    timestamp: "",
    slug: "",
  });
  const [formValidation, setFormValidation] = useState({
    author: "",
    description: "",
    metadesc: "",
    category: "",
    heading: "",
  });

  // handle form
  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      slug: formData?.heading?.replaceAll(" ", "-"),
      timestamp: new Date().toDateString(),
      [name]: value,
    }));

    console.log(formData);
  };

  //   formvalidation check
  const handleValidation = (values) => {
    const errors = {};
    const textRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;

    if (!values.author) {
      errors.author = " Author is Required!";
    } else if (!textRegex.test(values.author)) {
      errors.author = " Enter a Valid Author";
    }
    if (!values.heading) {
      errors.heading = " Heading is Required!";
    } else if (!textRegex.test(values.heading)) {
      errors.heading = " Enter a Valid Heading";
    }
    if (!values.description) {
      errors.description = " Description is Required!";
    } else if (!textRegex.test(values.description)) {
      errors.description = " Enter a Valid Description";
    }
    if (!values.metadesc) {
      errors.metadesc = " Meta Description is Required!";
    } else if (!textRegex.test(values.metadesc)) {
      errors.metadesc = " Enter a Valid Meta Description";
    }
    if (!values.category) {
      errors.category = " Category is Required!";
    } else if (values.category === "---Select---") {
      errors.category = " Enter a Valid Category";
    }
    return errors;
  };
  //   handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = handleValidation(formData);
    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      setFormValidation(errors);
      return;
    } else {
      handlePOSTRequest(formData);
      setFormValidation({});
    }
  };

  const handlePOSTRequest = async (data) => {
    let response = await PostData(data);

    let { success, heading } = response;
    if (success) {
      setSuccess(success);
      setMessage(heading);
    } else {
      setSuccess(!success);
      setMessage("Error");
    }
  };

  return (
    <>
      {success ? (
        <div className="flex  mx-auto py-8  flex-row w-full items-center justify-between md:justify-between">
          {/* <div>
            <h1 className=" font-[900] text-[32px] my-5 ">Submitted</h1>
          </div>
          <div>
            <button
              onClick={(prev) => setSuccess(!prev)}
              className="bg-blue-500 text-gray-100 px-3 py-2 rounded text-[18px] font-[800]"
            >
              Add Blogs
            </button>
          </div> */}

          <div
            class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div class="flex">
              <div class="py-1">
                <svg
                  class="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p class="font-bold">{message}</p>
                <p class="text-sm">
                  Make sure you know how these changes affect you.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full flex-col justify-center mx-auto max-w-lg"
        >
          <div className=" flex-row mx-auto justify-between item-center  mt-12 py-8 max-w-[800px] ">
            <h1 className="text-center font-[900] text-[32px] my-5 ">
              Add Blogs
            </h1>
            <div className="w-full px-3 py-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="heading"
              >
                Heading
              </label>
              <input
                onChange={handleChange}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  formValidation?.heading
                    ? "border-red-500 "
                    : "border-gray-200"
                }  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="heading"
                name="heading"
                value={formData?.heading}
                type="text"
                placeholder="Topic"
              />
              <p className="text-red-500  text-xs italic">
                {formValidation?.heading}
              </p>
            </div>
            <div className="w-full px-3 py-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="slug"
              >
                Slug
              </label>
              <input
                onChange={handleChange}
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                disabled
                id="slug"
                name="slug"
                value={formData?.heading?.replaceAll(" ", "-")}
                type="text"
                placeholder="Slug"
              />
            </div>
            <div className="w-full px-3 py-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="author"
              >
                Author
              </label>
              <input
                onChange={handleChange}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  formValidation?.author ? "border-red-500 " : "border-gray-200"
                }  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="author"
                name="author"
                value={formData?.author}
                type="text"
                placeholder="author"
              />
              <p className="text-red-500 text-xs italic">
                {formValidation?.author}
              </p>
            </div>
            <div className="w-full px-3 py-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>

              {/* className="resize rounded-md"  */}
              <textarea
                onChange={handleChange}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  formValidation?.description
                    ? "border-red-500 "
                    : "border-gray-200"
                }  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="description"
                name="description"
                textvalue={formData?.description}
                placeholder="Description"
              />
              <p className="text-red-500 text-xs italic">
                {formValidation?.description}
              </p>
            </div>
            <div className="w-full px-3 py-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="metadesc"
              >
                meta description
              </label>

              {/* className="resize rounded-md"  */}
              <textarea
                onChange={handleChange}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  formValidation?.metadesc
                    ? "border-red-500 "
                    : "border-gray-200"
                }  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="metadesc"
                name="metadesc"
                textvalue={formData?.metadesc}
                placeholder="Meta Description"
              />
              <p className="text-red-500 text-xs italic">
                {formValidation?.metadesc}
              </p>
            </div>

            <div className="w-full px-3 py-2">
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="category"
                  >
                    category
                  </label>
                  <div className="relative">
                    <select
                      className={`block  ${
                        formValidation?.category
                          ? "border-red-500 "
                          : "border-gray-200"
                      }  appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                      id="category"
                      name="category"
                      value={formData?.category}
                      onChange={handleChange}
                    >
                      <option>---Select---</option>
                      <option>Front-End Development</option>
                      <option>Back-End Development</option>
                      <option>Full Stack Development</option>
                      <option>Web Development</option>
                    </select>
                    <p className="text-red-500 text-xs italic">
                      {formValidation?.category}
                    </p>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="time"
                  >
                    Time
                  </label>
                  <input
                    onChange={handleChange}
                    disabled
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="time"
                    name="timestamp"
                    value={formData?.timestamp}
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-3 py-2 mt-3 text-center">
              <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold text-[22px] py-2 px-6 rounded">
                Create
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
