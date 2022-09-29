import React from "react"
import { NavLink } from "react-router-dom"

import "./Landing.css"


export default function Landing(){

    return(
        <section className="relative bg-center bg-no-repeat bg-cover bg-[url(https://i.pinimg.com/originals/c6/33/c2/c633c20ede82f0e0ced7d570dbe3a1f3.gif)]" style={{minWidth: "400px", minHeight: "900px" }}>
  <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

  <div className="relative px-4 py-32 mx-auto max-w-screen-xl sm:px-6 lg:px-8 lg:h-screen lg:items-center lg:flex">
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        The perfect website

        <strong className="block font-extrabold text-rose-700">
          to spend your time...
        </strong>
      </h1>

      <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
        The best free games website on the planet is now available! What are you waiting for to try it?
      </p>

      <div className="flex flex-wrap mt-8 text-center gap-4">
        <NavLink to="/home"><a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" style={{textDecoration: "none"}}>
          Get Started
        </a></NavLink>

        <NavLink to="/about"><a className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring" style={{textDecoration: "none"}}>
          Learn More
        </a></NavLink>

      </div>
    </div>
  </div>
</section>
    )
}