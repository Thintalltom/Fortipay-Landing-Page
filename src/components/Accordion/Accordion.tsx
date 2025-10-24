import { client } from '../../Contentful'
import { AccordionItem } from './AccordionItem'
import { useState, useEffect } from 'react'

export const Accordion = () => {
  
  const [activeIndex, setActiveIndex] = useState(0)
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       const [accordion, setAccordion] = useState<any[]>([])
         const [isLoading, setIsLoading] = useState(true)
        
            useEffect(() => {
                const getValuePreposition = async () => {
                    try {
                        const entries = await client.getEntries({
                            content_type:  'solutionBanner',
                        })
                              
                        const bannertext = entries?.items?.[0]?.fields?.questionData
                        if (Array.isArray(bannertext)) {
                            setAccordion(bannertext)
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
    <div className="space-y-4">
      {isLoading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="border border-blue-200 rounded-md overflow-hidden animate-pulse">
            <div className="p-4">
              <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))
      ) : (
        accordion.map((item, index) => (
          <div key={index} className="border border-blue-200 rounded-md overflow-hidden">
            <AccordionItem
              title={item.title}
              content={item.content}
              isActive={activeIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          </div>
        ))
      )}
    </div>
  )
}
