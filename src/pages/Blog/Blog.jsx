import React from 'react'
import EditorsPickSlider from '../../components/EditorsPickSlider/EditorsPickSlider'
import InsightIndex from '../../components/InsightIndex/InsightIndex'
import FeaturedPosts from '../../components/FeaturedPosts/FeaturedPosts'

const Blog = () => {
  return (
    <div>
     <InsightIndex/>
      <FeaturedPosts/>
      <EditorsPickSlider/>
    
    </div>
  )
}

export default Blog