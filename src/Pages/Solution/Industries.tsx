import TagButton from "../../components/TagButton"
import Image1 from '../../assets/Rectangle 12.svg'
import Image2 from '../../assets/Rectangle 12 (1).svg'
import Image3 from '../../assets/Rectangle 12 (2).svg'
import Image4 from '../../assets/Rectangle 13.svg'
const Industries = () => {
    return (
        <div className="p-[80px] ">
            <div className="flex justify-center items-center flex-col ">
                <TagButton>FEATURES OVERVIEW</TagButton>
                <p className='text-[#03377D] text-[38px] font-[Manrope] font-medium'>Industries We Protect</p>
                <p className="text-[#848484] font-[Lato] ">Corvyn AI delivers enterprise-grade fraud protection in tools that are simple, fast, and built for growing businesses.</p>
            </div>
            <div className=' grid grid-cols-2 mt-[50px] gap-[10px]'>
                <div className="rounded-[12px] bg-[#EBF8FF] flex flex-col p-[32px] gap-[12px]">
                    <p className="text-[#03377D] font-[Manrope] font-medium text-[24px]">eCommerce</p>
                    <img src={Image1} alt="first image" />
                    <p className="text-[#3B3B3B] font-[Lato] text-[16px]">Safeguard online stores from payment fraud, chargebacks, and account takeovers without adding friction for shoppers</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="rounded-[12px] bg-[#EBF8FF] flex flex-col px-[32px] h-fit gap-[12px]">
                        <img src={Image2} alt="second image" />
                        <p className="text-[#03377D] font-[Manrope] font-medium text-[24px] pb-[32px]">Subscription Platforms</p>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="p-[32px] rounded-[20px] text-center flex-1 bg-[#EBF8FF]">
                            <p className="text-[56px] font-[Manrope] font-bold text-[#03377D]">68%</p>
                            <p className="font-[Lato] text-[#3B3B3B]">Faster Coding. Better than any</p>
                        </div>
                        <div className="p-[32px] rounded-[20px] text-center flex-1 bg-[#EBF8FF]">
                            <p className="text-[56px] font-[Manrope] font-bold text-[#03377D]">1.5k</p>
                            <p className="font-[Lato] text-[#3B3B3B]">People subscribe to our</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-[12px] bg-[#EBF8FF] flex flex-col p-[32px] gap-[12px]">
                     <p className="text-[#03377D] font-[Manrope] font-medium text-[24px]">Crypto & Fintech</p>
                     <p className="text-[#3B3B3B] font-[Lato]">Stay aligned across platforms with instant updates, shared views, and seamless collaboration.</p>
                     <img src={Image3} alt="image 3" />
                </div>
                <div className="rounded-[12px] bg-[#EBF8FF] flex flex-col-reverse p-[32px] gap-[12px]">
                     <p className="text-[#03377D] font-[Manrope] font-medium text-[24px]">Marketplaces</p>
                     <p className="text-[#3B3B3B] font-[Lato]">Stay aligned across platforms with instant updates, shared views, and seamless collaboration.</p>
                     <img src={Image4} alt="image 4" />
                </div>
            </div>
        </div>
    )
}

export default Industries