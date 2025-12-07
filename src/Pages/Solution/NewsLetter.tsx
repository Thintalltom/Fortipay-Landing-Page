import bluetick from '../../assets/blue-tick.svg'

const NewsLetter = () => {
    const textContent = [
        {
            icon: bluetick,
            text: 'Weekly updates'
        },
        {
            icon: bluetick,
            text: 'Early access'
        },
        {
            icon: bluetick,
            text: 'Exclusive content'
        }
    ]
    return (
        <div className='px-[80px] pt-[40px] pb-[80px]'>
            <div className='rounded-[20px] bg-[#EBF8FF] p-[80px] flex  flex-col gap-[20px]'>
                <div>

                    <h4 className='text-[#0259cc] font-[Manrope] font-medium text-[46px]'>Subscribe to our Newsletter</h4>
                    <p className='text-[#0259cc] font-[Lato] font-normal'>Stop fraud before it costs you. Join the waitlist today</p>
                </div>
                <div className='flex justify-between mt-[40px]'>

                    <div className='flex gap-[20px]'>
                        {textContent.map((text) => (
                            <div className='flex gap-[10px] justify-center items-center'>
                                <img src={text.icon} alt='text-icon' className='w-[20px] h-[20px]' />
                                <p className='font-[Lato] text-[#0259cc]'>{text.text}</p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <input placeholder='Jessical@gmail.com' className='rounded-[40px] px-[12px] py-[8px] ' />
                        <button className='text-white rounded-[40px] bg-[#0259cc] px-[16px] py-[10px] text-[16px] font-[Lato] font-semibold'>Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsLetter