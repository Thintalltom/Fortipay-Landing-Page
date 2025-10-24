import TagButton from '../../components/TagButton'
import {
  ComparisonTable
} from './ComparisonTable'
import { useContentful } from '../../contexts/ContentfulContext'
const WhyFortiPay = () => {
    const { columnJson, rowsJson, isLoading } = useContentful()

  if (isLoading) {
    return (
      <div className='px-[80px] pt-[80px] pb-[40px]'>
        <div className='flex flex-col justify-center items-center gap-[20px]'>
          <div className='bg-gray-200 animate-pulse h-8 w-40 rounded'></div>
          <div className='bg-gray-200 animate-pulse h-12 w-96 rounded'></div>
          <div className='bg-gray-200 animate-pulse h-6 w-80 rounded'></div>
          <div className='bg-gray-200 animate-pulse h-64 w-full rounded mt-8'></div>
        </div>
      </div>
    )
  }

  return (
    <div className='px-[80px] pt-[80px] pb-[40px]'>
        <div className='flex flex-col justify-center items-center gap-[20px]'>
            <TagButton>FEATURES OVERVIEW</TagButton>
            <h3 className='text-[#03377D] font-[Manrope] text-[46px] font-medium'>Why FortiPay is Different</h3>
            <p className='text-[#848484] font-[Lato] font-normal text-[16px]'>Manager eager one search timepoint race. Goalposts regroup do yet invite vec language slipstream web hop.</p>

             <ComparisonTable columns={columnJson} rows={rowsJson} />
        </div>

    </div>
  )
}

export default WhyFortiPay