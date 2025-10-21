import TagButton from '../../components/TagButton'
import { BlogPost } from '../../Constant/Constant'
const BlogSection = () => {
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
        BlogPost.map((blog, index) => (
          <div key={index} className='flex flex-col gap-[20px] h-[400px] w-[400px]'>
            <img src={blog.image}  alt='blog image' className='h-[230px] w-[400px]' /> 
            <div className='flex flex-col gap-2 '>
              <p className='font-[Manrope] font-medium text-[#03377D] text-[20px]'>{blog.Header}</p>
              <p className='font-[Lato] font-normal text-[#848484] text-[16px] '>{blog.Text.length > 100 ? blog.Text.substring(0, 100) + '...more' : blog.Text}</p>
              <p className='font-[Lato] font-normal text-[#848484] text-[16px] mt-auto'>{blog.date}</p>
            </div>
            </div>
        ))
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