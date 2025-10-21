// import { Section } from 'lucide-react'
import TagButton from '../../components/TagButton'
import { SectionCard } from '../../Constant/Constant'
const Features = () => {
  return (
    <div className='px-[80px] pt-[40px] pb-[80px]'>
      <TagButton>FEATURES OVERVIEW</TagButton>
      <div>
        <p className='font-[Manrope] text-[34px] text-[#03377D]  '>Powerful Features to Keep Your Business Safe</p>
        <p className='text-[#848484] font-semibold text-[16px] font-[Lato] '>FortiPay delivers enterprise-grade fraud protection in tools that are simple, fast, and built for growing businesses.</p>
      </div>
      <div className='flex gap-[20px] mt-[20px] pt-[30px]'>
      {SectionCard.map((item, index) => (
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
    </div>
  )
}

export default Features