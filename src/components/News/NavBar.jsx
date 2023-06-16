import React from 'react'

function NavBar() {
  return (
    <div>

<nav class="flex justify-center space-x-20 bg-slate-100 mt-5 border-y-4 border-black py-2">
  <a href="/news" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xl" >My Feed</a>
  <a href="/home" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xl">All News</a>
  <a href="/projects" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xl">Top News</a>
  <a href="/reports" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xl">Trending</a>
  <a href="/reports" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xl">Bookmarks</a>
  <a href="/reports" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xl">Unread</a>
</nav>
    </div>
  )
}

export default NavBar