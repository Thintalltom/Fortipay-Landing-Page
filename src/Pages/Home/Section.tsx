import React from 'react'
import TagButton from '../../components/TagButton'
import InfiniteScroll from '../../components/InfiniteScroller'

const Section = () => {
  return (
    <div className='bg-white '>
      <div className='flex justify-center flex-col gap-[20px] items-center'>
        <TagButton>SECTION TITLE</TagButton>
        <p className="text-[38px] text-[#03377D] font-[Manrope] font-medium">Our customer reviews</p>
        <p className="font-[Lato] text-[#848484] mb-[80px] font-normal">FortiPay reduced our chargebacks by 40% in just three months.</p>
      </div>
        <InfiniteScroll />
    </div>
  )
}

export default Section