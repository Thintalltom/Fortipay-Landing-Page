/* eslint-disable @typescript-eslint/no-explicit-any */
import FooterImg from '@/assets/FooterFortpay.png'
import { useState, useEffect } from 'react'
import {client} from '../../Contentful'
import { useContentful } from '../../contexts/ContentfulContext'
const Trusted = () => {
   const { trustedText, trustedSubText } = useContentful()
         const [logo, setLogo] = useState<any[]>([])
           const [isLoading, setIsLoading] = useState(true)
              useEffect(() => {
                  const getValuePreposition = async () => {
                      try {
                          const entries = await client.getEntries({
                              content_type:  'solutionBanner',
                          })       
                          const bannertext = entries?.items?.[0]?.fields?.partnerjson
                          if (Array.isArray(bannertext)) {
                              setLogo(bannertext)
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
    <div className="relative w-full h-[268px] bg-gradient-to-b from-[#0564E3] to-[#03377D] px-[64px] py-[80px] mb-[40px]">
                <img src={FooterImg} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
                <div className="relative z-10  text-white flex justify-between">
                    <div className='flex flex-col '>

                        <h5 className='font-[Manrope] text-[30px] w-[300px]'>{trustedText}</h5>
                        <p className='w-[400px] font-[Lato] text-[16px] text-light'>{trustedSubText}</p>
                    </div>
                    <div className='grid grid-cols-5 gap-4'>
                     {isLoading ? (
                       Array.from({ length: 5 }).map((_, index) => (
                         <div key={index} className='w-20 h-12 bg-gray-300 rounded animate-pulse'></div>
                       ))
                     ) : (
                       logo.map((logoSrc, index) => (
                         <img key={index} src={logoSrc} alt='partner' />
                       ))
                     )}
                    </div>
                </div>
            </div>
  )
}

export default Trusted