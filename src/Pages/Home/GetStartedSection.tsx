
const GetStartedSection = () => {
  return (
    <section className="px-[64px] py-[120px]">

        <div className=' mb-[30px]  max-w-[1280px] h-[410px] border-[1px] border-[#33B7FF] mx-auto flex justify-center flex-col items-center  rounded-[24px] bg-[#EBF8FF]'>
           <p className="text-[38px] text-[#03377D] font-[Manrope] font-medium">Get Started with Corvyn AI</p>
        <p className="font-[Lato] text-[#848484] mb-[80px] font-normal">Explore how Sirius can transform your workflow and elevate your team’s collaboration.</p>
        <div className="flex gap-[20px]">
            <button className='bg-[#03377D] text-white font-[Lato] min-w-[180px] max-w-[185px] font-normal text-[16px] py-[10px] px-[20px] rounded-[40px]'>Get Started</button>
                    <button className='border-[#33B7FF]  border-[1px] text-[#03377D] font-[Lato] min-w-[180px] max-w-[185px] font-normal text-[16px] py-[10px] px-[20px] rounded-[40px]'>Request a Demo</button>
        </div>
        </div>
    </section>
  )
}

export default GetStartedSection