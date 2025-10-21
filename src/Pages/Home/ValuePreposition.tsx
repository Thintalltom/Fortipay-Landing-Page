import { valueProposition } from "../../Constant/Constant"
import LockImage from '../../assets/Lock.png'
import TagButton from '../../components/TagButton'
const ValuePreposition = () => {
  return (
    <div className="px-[64px] py-[80px] ">
        <TagButton className="mb-[10px]">VALUE PREPOSITION</TagButton>
        <p className="text-[38px] text-[#03377D] font-[Manrope] font-medium">FortiPay Delivers Smarter Fraud Protection</p>
        <p className="font-[Lato] text-[#848484] mb-[60px]">Four powerful ways FortiPay safeguards your revenue and builds customer trust without slowing your business down.</p>
        <div className="flex justify-between items-start">
            <div className="grid grid-cols-2 gap-[20px] flex-1">
                {valueProposition.map((item, index) => (
                    <div key={index} className="">
                        <img src={item.icon} alt="" className="w-[64px] h-[64px]" />
                        <h5 className="font-[Manrope] text-[#03377D] text-[20px] w-[250px] mt-[16px]">{item.header}</h5>
                        <p className="w-[280px] font-[Lato] text-[16px] text-light text-[#848484]">{item.title}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center lg:h-full 2xl:h-[550px] xl:h-[550px]">
                <img src={LockImage} alt="lock image" className=" w-auto" />
            </div>
        </div>
    
    </div>
  )
}

export default ValuePreposition