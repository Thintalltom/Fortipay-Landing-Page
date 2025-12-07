/* eslint-disable @typescript-eslint/no-explicit-any */
import TagButton from '../../components/TagButton'
// import { Pricings } from '../../Constant/Constant'
import check from '../../assets/ei_check.svg'
import BusinessImage from '../../assets/BusinessImage-nobg.png'
import { useState, useEffect } from 'react'
import { client} from '../../Contentful'
import { useContentful } from '../../contexts/ContentfulContext'
const Pricing = () => {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { pricingText, pricingSubText } = useContentful()
       const [pricings, setPricings] = useState<any[]>([])
       const [isLoading, setIsLoading] = useState(true)
      
          useEffect(() => {
              const getValuePreposition = async () => {
                  try {
                      const entries = await client.getEntries({
                          content_type:  'solutionBanner',
                      })
                      const bannertext = entries?.items?.[0]?.fields?.pricingData
                      if (Array.isArray(bannertext)) {
                          setPricings(bannertext)
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
        <div className="px-[64px] py-[80px] ">
            <div className="flex justify-center flex-col gap-[20px] items-center">
                <TagButton>SECTION TITLE</TagButton>
                <p className="text-[38px] text-[#0259cc] font-[Manrope] font-medium">{pricingText}</p>
                <p className="font-[Lato] text-[#848484] mb-[80px] font-normal">{pricingSubText}</p>
            </div>
            <div className='flex gap-[24px] items-center justify-center'>
                {isLoading ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className='rounded-[32px] p-[14px] bg-gradient-to-b from-[#F5F5F5] from-80% to-white w-[350px] animate-pulse'>
                            <div className='bg-white rounded-[24px] flex flex-col p-[10px]'>
                                <div className='border-b-[2px] px-[24px] pt-[24px] pb-[60px]'>
                                    <div className='h-4 bg-gray-200 rounded mb-[20px] w-24'></div>
                                    <div className='h-12 bg-gray-200 rounded mb-[20px] w-32'></div>
                                    <div className='h-4 bg-gray-200 rounded mb-[20px] w-full'></div>
                                    <div className='h-10 bg-gray-200 rounded w-full'></div>
                                </div>
                                <div className='p-[24px]'>
                                    <div className='h-4 bg-gray-200 rounded mb-[10px] w-20'></div>
                                    <div className='h-3 bg-gray-200 rounded mb-[25px] w-full'></div>
                                    <div className='grid grid-cols-1 gap-[30px]'>
                                        {Array.from({ length: 4 }).map((_, i) => (
                                            <div key={i} className='h-4 bg-gray-200 rounded w-full'></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    pricings.map((item, index) => (
                        <div key={index} className='group rounded-[32px] p-[14px] bg-gradient-to-b from-[#F5F5F5] from-80% to-white hover:bg-[#F5F5F5] w-[350px] transition-all duration-300 hover:shadow-xl cursor-pointer hover:-translate-y-2 relative hover:z-40'>
                            <div className='bg-white rounded-[24px] flex flex-col p-[10px]'>
                            {item.plan === 'Business Plan' && <img src={BusinessImage} alt='Business Badge' className='absolute top-2 right-2 z-10 w-[164px] rotate-60' />}
                                <div className='border-b-[2px] px-[24px] pt-[24px] pb-[60px]'>
                                    <div className='flex items-center gap-2 mb-[20px] relative z-20'>
                                        <p className='relative z-20 text-[#3B3B3B] font-[Lato] font-semibold'>{item.plan}</p>
                                        {item.plan === 'Business Plan' && <div className='relative z-20'><TagButton>Popular</TagButton></div>}
                                    </div>
                                    <h3 className='mb-[20px] relative z-20 text-[#3B3B3B] text-[56px] font-bold font-[Manrope]'>{item.price} <span className='font-semibold font-[Lato] text-[16px] text-[#ABABAB]'>/per month</span></h3>
                                    <p className='mb-[20px] relative z-20 text-[#5E5E5E] text-[16px] font-[Lato]'>{item.features}</p>
                                    <button className='bg-[#F5F5F5] group-hover:bg-[#0259cc] group-hover:text-white rounded-[64px] text-[Lato] text-[#3B3B3B] py-[10px] w-full max-w-[280px] px-[20px] transition-all duration-300 relative z-20 font-semibold mx-auto'>Get Started</button>
                                </div>
                                <div className='p-[24px]'>
                                    <p className='text-[#3B3B3B] font-[Manrope] font-medium'>Features</p>
                                    <p className='mb-[25px] text-[#ABABAB]  font-[Lato]'>{item.featureText}</p>
                                    <div className='grid grid-cols-1 gap-[30px]'>
                                        {item.featuresDetails.map((feature: any, featureIndex: any) => (
                                            <div key={featureIndex} className='gap-[5px] flex'>
                                                <img src={check} alt='checkImage' />
                                                <p className='text-[#848484] font-[Lato] text-[16px]'>{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Pricing