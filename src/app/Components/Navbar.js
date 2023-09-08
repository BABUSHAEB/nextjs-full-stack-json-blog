"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full  h-auto md:h-[70px] bg-gray-900  top-0   ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl max-w-[1920px] xl:px-[100px] md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* logo */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold ">Blogs</h2>
              </Link>
              {/* humberger svg btn */}
              <div
                className="md:hidden p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                <svg
                  className=" h-6 w-6"
                  fill="#0c5bdd"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {navbar ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  )}
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  <li className="px-4 py-3 text-xl text-white  text-center   hover:bg-purple-600 ">
                    Home
                  </li>
                </Link>
                <Link href="/Home" onClick={() => setNavbar(!navbar)}>
                  <li className="px-4 py-3 text-xl text-white md:px-6 text-center  hover:bg-purple-900 ">
                    About
                  </li>
                </Link>
                <Link href="/Blogs" onClick={() => setNavbar(!navbar)}>
                  <li className="px-4 py-3 text-xl text-white  text-center   hover:bg-purple-600 ">
                    Blogs
                  </li>
                </Link>
                <Link href="/AddBlogs" onClick={() => setNavbar(!navbar)}>
                  <li className="px-4 py-3 text-xl text-white  text-center   hover:bg-purple-600  ">
                    Add Blogs
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
