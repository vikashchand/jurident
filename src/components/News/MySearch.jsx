import React from 'react'

function MySearch() {
  return (
    <>
        <div>

<nav class="grid grid-cols-6 gap-3 space-x-20 mt-3">
    <div class="col-start-1 col-end-3 pt-3" >
    <a class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xl ml-28" >  <b>Trending |</b> Latest</a>
    </div>
  
  <div class="col-end-6 col-span-2 ml-10">
  <div class="relative mb-4 flex w-full flex-wrap items-stretch ml-28">
    <input
      type="search"
      class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon3" />

    
    <button
      class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
      type="button"
      id="button-addon3"
      data-te-ripple-init>
      Search
    </button>
  </div>
  </div>
  
</nav>
    </div>
    </>
  )
}

export default MySearch