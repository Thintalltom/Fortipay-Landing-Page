// import AboutSVG from '../../assets/BlogSvg.svg'
import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TagButton from '../../components/TagButton'
import BlogTabs from '../../components/BlogTabs/BlogTabs'

const Banner = () => {
  const [showLoadMore, setShowLoadMore] = useState(true)

  const handleLoadMore = () => {
    // Optional: Add any additional logic when load more is clicked
    // console.log('Load more clicked')
  }

  return (
    <div>
      <section className="relative w-full min-h-screen bg-white flex flex-col mb-[50px]">
        {/* <img src={AboutSVG} className="absolute inset-0 w-full h-full object-cover" /> */}
        <Navbar />
        <div className='flex justify-center items-center relative z-10 h-full px-[80px] pt-[80px]  flex-col'>
          <TagButton>INSIGHTS & IDEAS</TagButton>
          <h3 className='font-[Manrope] text-[38px] text-[#03377D] w-[700px] max-w-[800px] min-w-[500px] text-center'>Latest Blog Post</h3>
          <p className='text-[#848484] font-regular font-[Lato] text-center w-[550px] max-w-[600px] min-w-[400px] text-[16px]'>Discover stories, tips, and resources to inspire your next big idea.</p>
        </div>
        <BlogTabs onLoadMore={handleLoadMore} showLoadMore={showLoadMore} />
      </section>
    </div>
  )
}


export default Banner