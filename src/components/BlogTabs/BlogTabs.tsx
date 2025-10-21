import { useState } from 'react'

interface BlogPost {
  image: string
  Header: string
  Text: string
  date: string
  read: string
  category: string
}

interface BlogTabsProps {
  blogData: BlogPost[]
}

const BlogTabs = ({ blogData }: BlogTabsProps) => {
  const [activeTab, setActiveTab] = useState('all')
  
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'design', label: 'Design' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'company', label: 'Company' },
    { id: 'news', label: 'News' }
  ]

  const filteredBlogs = activeTab === 'all' 
    ? blogData 
    : blogData.filter(blog => blog.category === activeTab)

  return (
    <div className=' p-[80px]'>
      {/* Tabs */}
      <div className='flex gap-[4px] justify-center  mb-[60px]'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-[28px] text-[14px] border-[1px] py-[4px] px-[14px] font-[Lato] transition-colors ${
              activeTab === tab.id 
                ? 'bg-[#EBF8FF] border-[#33B7FF] text-[#1C658C]' 
                : 'bg-gray-200 border-gray-300 text-[#A2A2A2] hover:bg-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className='grid grid-cols-3 gap-[30px] '>
        {filteredBlogs.map((blog, index) => (
          <div key={index} className='flex flex-col gap-[10px]   w-[400px]'>
            <img src={blog.image}  alt='blog image' className='h-[230px] w-[400px]' /> 
            <div className='flex flex-col gap-2 h-full '>
              <p className='font-[Manrope] font-medium text-[#03377D] text-[20px]'>{blog.Header}</p>
              <p className='font-[Lato] font-normal text-[#848484] text-[16px]'>{blog.Text.length > 100 ? blog.Text.substring(0, 100) + '...more' : blog.Text}</p>
              <p className='font-[Lato] font-normal text-[#848484] text-[16px] mt-auto'>{blog.date}</p>
            </div>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default BlogTabs