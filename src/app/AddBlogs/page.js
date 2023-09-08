"use server";
import React from "react";
import BlogsForm from "../Components/BlogsForm";

let results;

export async function getBlogs(data) {
  let res = await fetch(
    "http://localhost:3000/api/BlogsPost",

    {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(data),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  let results = await res.json();
  // console.log(results, "data");
  return results;
}

export default async function AddBlogs() {
  return (
    <div className="justify-between px-4 mx-auto lg:max-w-7xl max-w-[1920px] xl:px-[100px] md:items-center md:flex md:px-8items-center">
      <BlogsForm PostData={getBlogs} />
    </div>
  );
}
