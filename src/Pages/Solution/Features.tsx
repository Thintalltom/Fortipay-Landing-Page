// import { Section } from 'lucide-react'
import TagButton from '../../components/TagButton'
import { useContentful } from '../../contexts/ContentfulContext'
const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="h-12 bg-gray-300 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
  </div>
)
const Features = () => {
   const { solutionFeatureText, solutionFeatureSubtext, isLoading,  powerfulJson} = useContentful()
  return (
    <div className='px-[80px] pt-[40px] pb-[80px]'>
      <TagButton>FEATURES OVERVIEW</TagButton>
      {isLoading ? (
        <>
          <div className='mb-6'>
            <SkeletonLoader />
          </div>
          <div className='flex gap-[20px] mt-[20px] pt-[30px]'>
            {[1,2,3].map((_, index) => (
              <div key={index} className='flex-1 h-[360px] bg-gray-200 rounded-[16px] animate-pulse'></div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div>
            <p className='font-[Manrope] text-[34px] text-[#03377D]  '>{solutionFeatureText}</p>
            <p className='text-[#848484] font-semibold text-[16px] font-[Lato] '>{solutionFeatureSubtext}</p>
          </div>
          <div className='flex gap-[20px] mt-[20px] pt-[30px]'>
          {powerfulJson.map((item, index) => (
            <div key={index} className='flex flex-col cursor-pointer justify-between rounded-[16px] bg-gradient-to-r from-[#33B7FF] via-white via-[#0ea5e9] to-[#33B7FF] bg-[length:300%_100%] hover:bg-[position:100%_0] transition-all duration-700 p-[1px] h-[300px] md:h-[340px] lg:h-[360px]'>
              <div className='bg-white rounded-[15px] p-[23px] flex flex-col justify-between h-full'>
              <div className='w-[50%] h-[120px] md:h-[140px] lg:h-[160px]'>
                <img src={item.icon} />
              </div>
              <div className='h-[140px] md:h-[150px] lg:h-[160px] flex flex-col justify-start overflow-hidden'>
                <p className='font-[Manrope] text-[20px] text-[#03377D] font-medium mb-2'>{item.header}</p>
                <p className='text-[#848484] font-normal leading-6 text-[14px] font-[Lato]'>{item.text}</p>
              </div>
              </div>
            </div>
          ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Features