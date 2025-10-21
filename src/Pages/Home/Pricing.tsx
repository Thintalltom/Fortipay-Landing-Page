import TagButton from '../../components/TagButton'
import { Pricings } from '../../Constant/Constant'
import check from '../../assets/ei_check.svg'
import BusinessImage from '../../assets/BusinessImage-nobg.png'
const Pricing = () => {
    return (
        <div className="px-[64px] py-[80px] ">
            <div className="flex justify-center flex-col gap-[20px] items-center">
                <TagButton>SECTION TITLE</TagButton>
                <p className="text-[38px] text-[#03377D] font-[Manrope] font-medium">Plans and Pricing.</p>
                <p className="font-[Lato] text-[#848484] mb-[80px] font-normal">Flexible plans and solutions for business of all sizes</p>
            </div>
            <div className='flex gap-[24px] items-center justify-center'>
                {Pricings.map((item) => (
                    <div className='group rounded-[32px] p-[14px] bg-gradient-to-b from-[#F5F5F5] from-80% to-white hover:bg-[#F5F5F5] w-[350px] transition-all duration-300 hover:shadow-xl cursor-pointer hover:-translate-y-2 relative hover:z-40'>
                        <div className='bg-white rounded-[24px] flex flex-col p-[10px]'>
                        {item.plan === 'Business Plan' && <img src={BusinessImage} alt='Business Badge' className='absolute top-2 right-2 z-10 w-[164px] rotate-60' />}
                            <div className='border-b-[2px] px-[24px] pt-[24px] pb-[60px]'>
                                <div className='flex items-center gap-2 mb-[20px] relative z-20'>
                                    <p className='relative z-20 text-[#3B3B3B] font-[Lato] font-semibold'>{item.plan}</p>
                                    {item.plan === 'Business Plan' && <div className='relative z-20'><TagButton>Popular</TagButton></div>}
                                </div>
                                <h3 className='mb-[20px] relative z-20 text-[#3B3B3B] text-[56px] font-bold font-[Manrope]'>{item.price} <span className='font-semibold font-[Lato] text-[16px] text-[#ABABAB]'>/per month</span></h3>
                                <p className='mb-[20px] relative z-20 text-[#5E5E5E] text-[16px] font-[Lato]'>{item.features}</p>
                                <button className='bg-[#F5F5F5] group-hover:bg-[#03377D] group-hover:text-white rounded-[64px] text-[Lato] text-[#3B3B3B] py-[10px] w-full max-w-[280px] px-[20px] transition-all duration-300 relative z-20 font-semibold mx-auto'>Get Started</button>
                            </div>
                            <div className='p-[24px]'>
                                <p className='text-[#3B3B3B] font-[Manrope] font-medium'>Features</p>
                                <p className='mb-[25px] text-[#ABABAB]  font-[Lato]'>{item.featureText}</p>
                                <div className='grid grid-cols-1 gap-[30px]'>
                                    {item.featuresDetails.map((feature) => (
                                        <div className='gap-[5px] flex'>
                                            <img src={check} alt='checkImage' />
                                            <p className='text-[#848484] font-[Lato] text-[16px]'>{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing