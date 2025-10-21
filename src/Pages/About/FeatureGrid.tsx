import Dice from '../../assets/DiceFour.svg';
import Device from '../../assets/Devices.svg';
import Contactless from '../../assets/ContactlessPayment.svg';
const FeatureGrid = () => {
  return (
    <div>
      <div className='grid grid-cols-3 pt-[30px] gap-[12px]'>
        <div className='col-span-2 bg-[#EBF8FF] rounded-[12px] grid grid-cols-2 '>
          <div className="p-[32px]">

          <div className='flex bg-[#EBF8FF] flex-col gap-[10px] h-[600px] justify-between'>
            <div className='flex flex-col gap-[10px]'>
              <img src={Dice} alt='dice' className='w-[33.75px] h-[33.75px]' />
              <p className="font-[Manrope] text-[24px] text-medium">🚀 Innovation that Protects</p>
              <p className="w-[326px] font-[Lato] text-[#7C7C7C] font-regular">We continuously evolve our fraud prevention technology to stay ahead of emerging threats, ensuring our clients are always protected by the most advanced tools in the industry.</p>
            </div>
            <button className="bg-[#03377D] w-[120px] h-[44px] rounded-full mb-[20px] text-white">Get started</button>
          </div>
          </div>
          <div className=" bg-[#D9D9D9] rounded-tr-[20px] rounded-br-[20px]">
          
          </div>
        </div>
        <div className=" grid grid-rows-2 gap-[10px]">
          <div className="bg-[#EBF8FF] rounded-[20px] p-[32px] flex flex-col gap-[41px]">
            <img src={Contactless} alt='device' className="w-[45px] h-[45px]" />
            <div className="flex flex-col gap-[10px]">
            <h3 className="text-[#03377D] text-[24px] font-[Manrope] font-medium text-nowrap">🔒 Trust Through Transparency</h3>
            <p className="text-[#7C7C7C] font-[Lato] text-[16px] leading-6">We believe security should build confidence, not confusion. Every FortiPay solution is designed to give businesses clear insights, actionable data, and full visibility into their fraud defenses.</p>
            </div>
          </div>
          <div className="bg-[#EBF8FF] rounded-[20px] p-[32px] flex flex-col gap-[41px]">
            <img src={Device} alt='device' className="w-[45px] h-[45px]" />
            <div className="flex flex-col gap-[10px]">
            <h3 className="text-[#03377D] text-[24px] font-[Manrope] font-medium text-nowrap">Simplicity at Scale</h3>
            <p className="text-[#7C7C7C] font-[Lato] text-[16px] leading-6">Fraud protection shouldn’t slow you down. Our systems are designed to integrate effortlessly, adapt quickly, and deliver results—no matter how complex your operations become.</p>
            </div>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-2 pt-[20px] gap-[24px] ">
      <div className="bg-[#EBF8FF] p-[32px] rounded-[20px] h-[319px] flex flex-col justify-between">
    <img src={Contactless} alt='device' className="w-[45px] h-[45px]" />
    <div className="flex flex-col gap-[10px]">
            <h3 className="text-[#03377D] text-[24px] font-[Manrope] font-medium text-nowrap">Collaboration for Growth</h3>
            <p className="text-[#7C7C7C] font-[Lato] text-[16px] leading-6">We grow when our clients grow. That’s why we work closely with merchants, payment partners, and developers to refine solutions that serve real business needs.</p>
            </div>
      </div>
      <div className="bg-[#EBF8FF] p-[32px] rounded-[20px] h-[319px] flex flex-col justify-between">
     <img src={Device} alt='device' className="w-[45px] h-[45px]" />
    <div className="flex flex-col gap-[10px]">
            <h3 className="text-[#03377D] text-[24px] font-[Manrope] font-medium text-nowrap"> Integrity First</h3>
            <p className="text-[#7C7C7C] font-[Lato] text-[16px] leading-6">Every decision we make is grounded in honesty, reliability, and a commitment to safeguarding the trust of businesses and their customers.</p>
            </div>
      </div>
      </div>
    </div>

  );
};

export default FeatureGrid;
