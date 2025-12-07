// import { valueProposition } from "../../Constant/Constant"
import LockImage from '../../assets/Lock.png'
import TagButton from '../../components/TagButton'
import { useState, useEffect } from "react"
import { client} from '../../Contentful'
import { useContentful } from '../../contexts/ContentfulContext'
const ValuePreposition = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [valuePrepositions, setValuePreposition] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
     const { valuePreposition, valuePrepositionSubText } = useContentful()

    useEffect(() => {
        const getValuePreposition = async () => {
            try {
                const entries = await client.getEntries({
                    content_type:  'solutionBanner',
                })
                const bannertext = entries?.items?.[0]?.fields?.bannertext
                if (Array.isArray(bannertext)) {
                    setValuePreposition(bannertext)
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
        <TagButton className="mb-[10px]">VALUE PREPOSITION</TagButton>
        <p className="text-[38px] text-[#0259cc] font-[Manrope] font-medium">{valuePreposition}</p>
        <p className="font-[Lato] text-[#848484] mb-[60px]">{valuePrepositionSubText}</p>
        <div className="flex justify-between items-start">
            <div className="grid grid-cols-2 gap-[20px] flex-1">
                {isLoading ? (
                    // Skeleton loading
                    Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <div className="w-[64px] h-[64px] bg-gray-300 rounded"></div>
                            <div className="h-6 bg-gray-300 rounded mt-[16px] w-[200px]"></div>
                            <div className="h-4 bg-gray-300 rounded mt-2 w-[250px]"></div>
                            <div className="h-4 bg-gray-300 rounded mt-1 w-[200px]"></div>
                        </div>
                    ))
                ) : (
                    valuePrepositions.map((item, index) => (
                        <div key={index} className="">
                            <img src={item.icon} alt="" className="w-[64px] h-[64px]" />
                            <h5 className="font-[Manrope] text-[#0259cc] text-[20px] w-[250px] mt-[16px]">{item.header}</h5>
                            <p className="w-[280px] font-[Lato] text-[16px] text-light text-[#848484]">{item.title}</p>
                        </div>
                    ))
                )}
            </div>
            <div className="flex justify-center items-center lg:h-full 2xl:h-[550px] xl:h-[550px]">
                <img src={LockImage} alt="lock image" className=" w-auto" />
            </div>
        </div>
    
    </div>
  )
}

export default ValuePreposition