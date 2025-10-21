import { howItWorks } from "../../Constant/Constant"
import TagButton from '../../components/TagButton'
export const HowItWorks = () => {
  return (
    <div className="p-[80px]">
        <TagButton>HOW IT WORKS</TagButton>
        <p className="text-[38px] text-[#03377D] font-[Manrope] font-medium">How Fortipay Protects Your Business</p>
        <p className="font-[Lato] text-[#848484] mb-[80px] font-normal">Three simple steps to stop fraud before it costs you revenue or customer trust.</p>

        <div className="flex gap-[24px] items-stretch">
            {howItWorks.map((work) => (
                <div className="bg-white cursor-pointer p-[16px] flex flex-col justify-between flex-1 rounded-[16px]" style={{boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)'}}>
                    <div>
                    <p className="text-[#03377D] text-[24px] font-medium font-[Manrope] mb-4 ">{work.header}</p>
                    <p className='text-[16px] text-[#848484] font-[Lato] font-normal mb-8'>{work.text}</p>
                    </div>
                    <img src={work.image} alt=" work image " className="mt-auto" />
                </div>
            ))}
            </div>
    </div>
  )
}
