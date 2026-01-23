import React from 'react'
import BlogHero from '../../components/Blog/BlogHero'
import BlogList from '../../components/Blog/BlogList'
import EditorsPickSlider from '../../components/EditorsPickSlider/EditorsPickSlider'

const Blog = () => {
  return (
    <div>
      <BlogHero/>
     
      <EditorsPickSlider/>
       <BlogList/>
    </div>
  )
}

export default Blog