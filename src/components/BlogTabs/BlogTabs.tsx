/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useContentful } from '../../contexts/ContentfulContext'
interface BlogTabsProps {
  onLoadMore: () => void
  showLoadMore: boolean
}

const BlogTabs = ({ onLoadMore, showLoadMore }: BlogTabsProps) => {
  const [activeTab, setActiveTab] = useState('all')
  const [displayCount, setDisplayCount] = useState(6)
  const { blogPoster, isLoading } = useContentful()

  // Extract unique categories from Contentful data
  const categories = Array.from(
    new Set(
      blogPoster?.map((post: any) => 
        post.fields.categories?.[0]?.fields.title
      ).filter(Boolean)
    )
  )

  const tabs = [
    { id: 'all', label: 'All' },
    ...categories.map(category => ({
      id: category.toLowerCase(),
      label: category
    }))
  ]

  // Filter Contentful blog posts
  const allFilteredBlogs = activeTab === 'all' 
    ? blogPoster 
    : blogPoster?.filter((post: any) => 
        post.fields.categories?.[0]?.fields.title?.toLowerCase() === activeTab
      )

  const filteredBlogs = allFilteredBlogs?.slice(0, displayCount)
  const hasMore = (allFilteredBlogs?.length || 0) > displayCount

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6)
    onLoadMore()
  }

  if (isLoading) {
    return (
      <div className='p-[80px]'>
        {/* Skeleton Tabs */}
        <div className='flex gap-[4px] justify-center mb-[60px]'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className='bg-gray-200 animate-pulse h-8 w-20 rounded-full'></div>
          ))}
        </div>
        
        {/* Skeleton Blog Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className='flex flex-col bg-white rounded-lg overflow-hidden shadow-sm'>
              <div className='aspect-video bg-gray-200 animate-pulse'></div>
              <div className='flex flex-col gap-3 p-6'>
                <div className='bg-gray-200 animate-pulse h-5 w-3/4 rounded'></div>
                <div className='bg-gray-200 animate-pulse h-4 w-full rounded'></div>
                <div className='bg-gray-200 animate-pulse h-4 w-2/3 rounded'></div>
                <div className='bg-gray-200 animate-pulse h-3 w-1/2 rounded mt-2'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredBlogs?.map((post: any, index: number) => (
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
      }
      </div>
      
      {hasMore && showLoadMore && (
        <div className='flex justify-center items-center mt-8'>
          <button 
            onClick={handleLoadMore}
            className='px-[20px] py-[8px] bg-[#EBF8FF] text-[Lato] text-[#0259cc] font-semibold rounded-full hover:bg-[#D1F2FF] transition-colors'
          >
            Load more
          </button>
        </div>
      )}
    </div>
  )
}

export default BlogTabs