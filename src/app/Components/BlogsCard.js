import Link from "next/link";
import React from "react";

export default function BlogsCard({ AllBlogs }) {
  return (
    <section className="text-gray-600 body-font mx-auto overflow-hidden ">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100 flex-col justify-center items-center">
          {AllBlogs?.map((item, index) => {
            return (
              <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    {item?.category?.toUpperCase()}
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    {item?.timestamp}
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    {item?.heading}
                  </h2>
                  <p className="leading-relaxed">
                    {item?.description?.split(".")[0]?.concat(".")}
                  </p>
                  <Link href={`Blogs/${item?.slug}`}>
                    <p className="text-indigo-500 inline-flex items-center mt-4">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
