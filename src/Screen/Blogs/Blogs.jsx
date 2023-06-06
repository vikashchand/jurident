import React from 'react'

import Blog from '../../components/Blogf/Blog'
import BlogNavbar from '../../components/Blogf/BlogNavbar'

import Trending from '../../components/Blogf/Trending'
import './Blogs.css'
import Search from '../../components/Blogf/Search'
const Blogs = () => {
  return (
    <div>Blogs
    <BlogNavbar/>
  <Search/>
    <Trending/>
    <Blog/>


    </div>
  )
}

export default Blogs