import React from 'react'

import { Helmet } from "react-helmet-async";
function NavBar() {

  return (
    <div>
      <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>

{/* <nav class="flex justify-center space-x-20 bg-slate-100 mt-3 ml-8 border-y-4 border-black py-2">
  <a href="/news" class="font-medium px-2 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xl" >My Feed</a>
  <a href="/home" class="font-medium px-2 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xl">All News</a>
  <a href="/projects" class="font-medium px-2 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xl">Top News</a>
  <a href="/reports" class="font-medium px-2 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xl">Trending</a>
  <a href="/reports" class="font-medium px-2 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xl">Bookmarks</a>
  <a href="/reports" class="font-medium px-2 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xl">Unread</a> 
  
</nav> */}


<nav
  class="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
  <div class="flex w-full flex-wrap items-center justify-between px-3">
    <a
      class="ml-2 text-xl text-neutral-800 dark:text-neutral-200 py-2"
      href="/news"
      >My Feed</a
    >
    <a
      class="ml-2 text-xl text-neutral-800 dark:text-neutral-200 py-2"
      href="/home"
      >All News</a
    >
    <a
      class="ml-2 text-xl text-neutral-800 dark:text-neutral-200 py-2"
      href="/projects"
      >Top News</a
    >
    <a
      class="ml-2 text-xl text-neutral-800 dark:text-neutral-200 py-2"
      href="/reports"
      >Trending</a
    >
    <a
      class="ml-2 text-xl text-neutral-800 dark:text-neutral-200 py-2"
      href="/reports"
      >Bookmarks</a
    >
    <a
      class="ml-2 text-xl text-neutral-800 dark:text-neutral-200 py-2"
      href="/reports"
      >Unread</a
    >
    <div class="ml-5 flex w-[30%] items-center justify-between">
      <input
        type="search"
        class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2" />

      <span
        class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
        id="basic-addon2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="black"
          class="h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </div>
  </div>
</nav>











    </div>
  )
}

export default NavBar