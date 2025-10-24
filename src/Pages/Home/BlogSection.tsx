/* eslint-disable @typescript-eslint/no-explicit-any */
import TagButton from '../../components/TagButton'
import { useState, useEffect } from 'react'
import {client } from '../../Contentful'
const BlogSection = () => {
   const [blogPost, setBlogPost] = useState<any[]>([])
       const [isLoading, setIsLoading] = useState(true)
      
          useEffect(() => {
              const getValuePreposition = async () => {
                  try {
                      const entries = await client.getEntries({
                          content_type:  'solutionBanner',
                      })
                
               
                      const bannertext = entries?.items?.[0]?.fields?.homeBlog
  
                      if (Array.isArray(bannertext)) {
                          setBlogPost(bannertext)
                      }
                    
                  } catch (error) {
                      console.log(error)
                  } finally {
                      setIsLoading(false)
                  }
              }
              getValuePreposition()
          }, [])
  return (
    <section className='px-[64px] py-[80px]'>
        <div className='flex justify-center items-center flex-col'>
         <TagButton>SECTION TITLE</TagButton>
                 <p className="text-[38px] text-[#03377D] font-[Manrope] font-medium">Latest blog posts</p>
        <p className="font-[Lato] text-[#848484] mb-[80px] font-normal">Discover stories, tips, and resources to inspire your next big idea.</p>
        </div>
        <div>
      <div className='grid grid-cols-3  gap-[40px] '>
      {
        isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className='flex flex-col gap-[20px] h-[400px] w-[400px] animate-pulse'>
              <div className='h-[230px] w-[400px] bg-gray-300 rounded'></div>
              <div className='flex flex-col gap-2'>
                <div className='h-5 bg-gray-300 rounded w-3/4'></div>
                <div className='h-4 bg-gray-300 rounded mb-2'></div>
                <div className='h-4 bg-gray-300 rounded w-5/6 mb-2'></div>
                <div className='h-4 bg-gray-300 rounded w-1/2 mt-auto'></div>
              </div>
            </div>
          ))
        ) : (
          blogPost.map((blog, index) => (
            <div key={index} className='flex flex-col gap-[20px] h-[400px] w-[400px]'>
              <img src={blog.image}  alt='blog image' className='h-[230px] w-[400px]' /> 
              <div className='flex flex-col gap-2 '>
                <p className='font-[Manrope] font-medium text-[#03377D] text-[20px]'>{blog.Header}</p>
                <p className='font-[Lato] font-normal text-[#848484] text-[16px] '>{blog.Text.length > 100 ? blog.Text.substring(0, 100) + '...more' : blog.Text}</p>
                <p className='font-[Lato] font-normal text-[#848484] text-[16px] mt-auto'>{blog.date}</p>
              </div>
            </div>
          ))
        )
      }
      </div>
      <div className='flex justify-center items-center mt-[80px]'>
        <button className='bg-[#03377D] text-white font-[Lato] font-normal text-[16px] py-[10px] px-[20px] rounded-[40px]'>View all posts</button>
      </div>
        </div>


    </section>
  )
}

export default BlogSection