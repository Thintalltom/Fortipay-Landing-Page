import TagButton from '../../components/TagButton'
import {useState, useEffect} from 'react'
import { client} from '../../Contentful'
import { useContentful } from '../../contexts/ContentfulContext'
export const HowItWorks = () => {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const [howItWorks, setHowItWorks] = useState<any[]>([])
   const [isLoading, setIsLoading] = useState(true)
   const { workText, workSubText } = useContentful()
      useEffect(() => {
          const getValuePreposition = async () => {
              try {
                  const entries = await client.getEntries({
                      content_type:  'solutionBanner',
                  })           
                  const bannertext = entries?.items?.[0]?.fields?.protectData
                  if (Array.isArray(bannertext)) {
                      setHowItWorks(bannertext)
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
    <div className="p-[80px]">
        <TagButton>HOW IT WORKS</TagButton>
        <p className="text-[38px] text-[#03377D] font-[Manrope] font-medium">{workText}</p>
        <p className="font-[Lato] text-[#848484] mb-[80px] font-normal">{workSubText}</p>

        <div className="flex gap-[24px] items-stretch">
            {isLoading ? (
                // Skeleton loading
                Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="bg-white p-[16px] flex flex-col justify-between flex-1 rounded-[16px] animate-pulse" style={{boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)'}}>
                        <div>
                            <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded mb-8 w-5/6"></div>
                        </div>
                        <div className="h-32 bg-gray-300 rounded"></div>
                    </div>
                ))
            ) : (
                howItWorks.map((work, index) => (
                    <div key={index} className="bg-white cursor-pointer p-[16px] flex flex-col justify-between flex-1 rounded-[16px]" style={{boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)'}}>
                        <div>
                            <p className="text-[#03377D] text-[24px] font-medium font-[Manrope] mb-4 ">{work.header}</p>
                            <p className='text-[16px] text-[#848484] font-[Lato] font-normal mb-8'>{work.text}</p>
                        </div>
                        <img src={work.image} alt=" work image " className="mt-auto h-64 w-full object-cover" />
                    </div>
                ))
            )}
        </div>
    </div>
  )
}
