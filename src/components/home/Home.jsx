import React from 'react'
import Banner from './banner/Banner'
import FeaturedJobs from './featuredJobs/FeaturedJobs'
import CategoryList from './categoryList/CategoryList'

function Home() {
  return (
    <div className=''>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  )
}

export default Home