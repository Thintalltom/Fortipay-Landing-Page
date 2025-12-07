/* eslint-disable @typescript-eslint/no-explicit-any */
import TagButton from '../../components/TagButton'
import { useContentful } from '../../contexts/ContentfulContext'

const BlogSection = () => {
  const { blogPoster, isLoading } = useContentful()
  
  // Get first 3 blog posts
  const filteredBlogs = blogPoster?.slice(0, 3)
  return (
    <section className='px-[64px] py-[80px]'>
        <div className='flex justify-center items-center flex-col'>
         <TagButton>SECTION TITLE</TagButton>
                 <p className="text-[38px] text-[#0259cc] font-[Manrope] font-medium">Latest blog posts</p>
        <p className="font-[Lato] text-[#848484] mb-[80px] font-normal">Discover stories, tips, and resources to inspire your next big idea.</p>
        </div>
        <div>
      <div className='grid grid-cols-3 gap-[40px]'>
        {
          isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='flex flex-col bg-white rounded-lg overflow-hidden shadow-sm animate-pulse'>
                <div className='aspect-video bg-gray-200'></div>
                <div className='flex flex-col gap-3 p-6'>
                  <div className='bg-gray-200 h-5 w-3/4 rounded'></div>
                  <div className='bg-gray-200 h-4 w-full rounded'></div>
                  <div className='bg-gray-200 h-4 w-2/3 rounded'></div>
                  <div className='bg-gray-200 h-3 w-1/2 rounded mt-2'></div>
                </div>
              </div>
            ))
          ) : (
            filteredBlogs?.map((post: any, index: number) => (
              <div key={index} className='flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                <div className='aspect-video overflow-hidden'>
                  <img 
                    src={post.fields.images?.[0]?.fields?.file?.url} 
                    alt='blog image' 
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' 
                  />
                </div>
                <div className='flex flex-col gap-3 p-6 flex-grow'>
                  <h3 className='font-[Manrope] font-medium text-[#0259cc] text-[18px] leading-tight line-clamp-2'>
                    {post.fields.title}
                  </h3>
                  <p className='font-[Lato] font-normal text-[#848484] text-[14px] leading-relaxed line-clamp-3'>
                    {post.fields.content?.content?.[0]?.content?.[0]?.value?.length > 120 
                      ? post.fields.content.content[0].content[0].value.substring(0, 120) + '...'
                      : post.fields.content?.content?.[0]?.content?.[0]?.value
                    }
                  </p>
                  <p className='font-[Lato] font-normal text-[#848484] text-[12px] mt-auto pt-2 border-t border-gray-100'>
                    {new Date(post.fields.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            ))
          )
        }
      </div>
      <div className='flex justify-center items-center mt-[80px]'>
        <button className='bg-[#0259cc] text-white font-[Lato] font-normal text-[16px] py-[10px] px-[20px] rounded-[40px] hover:bg-[#02285a] transition-colors'>View all posts</button>
      </div>
        </div>


    </section>
  )
}

export default BlogSection