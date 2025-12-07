/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
// import FortiPay from '../../assets/FORTIPAYUNDER.svg'
import FooterImg from '../../assets/FooterFortpay.png'
// import FortyLogo from '../../assets/FortiPay.svg'
import { client } from '../../Contentful'
import { useState, useEffect } from 'react'
const Footer = () => {
  const [footerData, setFooterData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getValuePreposition = async () => {
      try {
        const entries = await client.getEntries({
          content_type: 'solutionBanner',
        })
        const bannertext = entries?.items?.[0]?.fields?.footerData
        if (Array.isArray(bannertext)) {
          setFooterData(bannertext)
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
    <footer className='relative z-10 bg-[#03377D] w-full mt-auto min-h-[200px] flex flex-col items-center justify-center'>
      <img src={FooterImg} className="absolute inset-0 w-full h-full object-cover" />
      <div className='px-[80px] pt-[40px] pb-[80px] text-white flex justify-between  w-full'>
        <div className='flex flex-col '>
          <img src={"https://images.ctfassets.net/t38lsvt2xzqb/1yBv78sYuQLzO5zRLYYc7K/ff9f0d57518c9b09eb73671361438dbb/Corvyn_AI_x_Interswitch-removebg-preview.png"} className='w-[300px] h-fit object-contain mb-[-40px] ' />
          <div className='w-[410px]  h-fit text-[14px] '>
            <p>Shark illustration barn seems parking hits tiger globalize forward who's. Cross-pollination optimize obviously due deploy day stronger. Practices looking looking caught supervisor principles eat. Needle field including after where door.</p>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-[40px]'>
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className='flex flex-col gap-[10px] animate-pulse'>
                <div className='h-4 bg-gray-400 rounded w-20 mb-2'></div>
                <div className='flex flex-col gap-[8px]'>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className='h-3 bg-gray-500 rounded w-16'></div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            footerData.map((footer, index) => (
              <div key={index} className='flex flex-col gap-[10px]'>
                <p className='font-semibold text-[16px]'>{footer.header}</p>
                <div className='flex flex-col gap-[8px]'>
                  {footer.items.map((text: any, textIndex: number) => (
                    <a key={textIndex} href={text?.link} target="_blank" rel="noopener noreferrer" className='text-[14px] cursor-pointer opacity-80'>{text.label}</a>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* <img src={FortiPay} alt='fotipay image' /> */}
      {/* <img src={FortiPay} alt='fortipay under logo' /> */}
      <div className='p-[80px] w-full'>

        <hr className='border-[0.5px] padding-b-[20px] w-full' />
        <div className='flex gap-[10px] text-white'>
          <p>© 2025 </p> <p>.</p> <p>Terms</p><p>.</p> <p>Privacy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer