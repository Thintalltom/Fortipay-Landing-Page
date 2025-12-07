
import FortipaySvg from '../../assets/correctfortipay.svg'
import Navbar from '../../components/Navbar/Navbar'
import { useContentful } from '../../contexts/ContentfulContext'

const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="h-12 bg-gray-300 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
  </div>
)
const Banner = () => {
  const { solutionBannerText, solutionBannerSubtext, isLoading } = useContentful()
  return (

    <section className="relative w-full min-h-screen bg-white flex flex-col mb-[100px]">
      <img src={FortipaySvg} className="absolute inset-0 w-full h-full object-cover" />
      <Navbar />
      <div className="relative z-10 flex w-full p-[80px] justify-between  ">

        {isLoading ? (
          <>
            <div className='flex flex-col'>
              <div className='w-[500px] pt-[50px]'>
                <SkeletonLoader />
              </div>
            </div>
            <div className='ml-[40px] w-[500px]'>
              <SkeletonLoader />
            </div>
          </>
        ) : (
          <div className='grid grid-cols-2  w-full'>
            <div className=' flex flex-col w-[631px] '>
              <h3 className='w-[500px] pt-[50px] text-[42px] font-[Manrope] font-medium'> {solutionBannerText}
                {/* <span className='text-[#5579A8]'>Fraud Protection That</span> <span className='text-[#0259cc]'>Adapts to Your Business</span> */}
              </h3>
              <div className="flex gap-[20px] pt-[20px]">
                <button className='bg-[#0259cc] text-white font-[Lato] min-w-[180px] max-w-[185px] font-normal text-[16px] py-[10px] px-[20px] rounded-[40px]'>Get Started</button>
                <button className=' text-[#0259cc] font-[Lato] min-w-[180px] max-w-[185px] font-normal text-[16px] py-[10px] px-[20px] rounded-[40px] bg-[#EBF8FF]'>Request a Demo</button>
              </div>
            </div>
            <div className=''>
              <p className='text-[#848484] font-[Lato] leading-loose w-[609px]'>{solutionBannerSubtext}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Banner