import { useContentful } from '../../contexts/ContentfulContext'
const FeatureGrid = () => {
    const { aboutVisionJson, VisionSideJson, visionLeftJson} = useContentful()
  

  

  return (
    <div>
      <div className='grid grid-cols-3 pt-[30px] gap-[12px]'>
        <div className='col-span-2 bg-[#EBF8FF] rounded-[12px] grid grid-cols-2 '>
          <div className="p-[32px]">
            <div className='flex bg-[#EBF8FF] flex-col gap-[10px] h-[600px] justify-between'>
              <div className='flex flex-col gap-[10px]'>
                <img src={visionLeftJson?.icon} alt='dice' className='w-[33.75px] h-[33.75px]' />
                <p className="font-[Manrope] text-[24px] text-medium">{visionLeftJson?.title}</p>
                <p className="w-[326px] font-[Lato] text-[#7C7C7C] font-regular">{visionLeftJson?.description}</p>
              </div>
              <button className="bg-[#03377D] w-[120px] h-[44px] rounded-full mb-[20px] text-white">Get started</button>
            </div>
          </div>
          <div className=" bg-[#D9D9D9] rounded-tr-[20px] rounded-br-[20px]">
          </div>
        </div>
        <div className=" grid grid-rows-2 gap-[10px]">
          {VisionSideJson.map((feature, index) => (
            <div key={index} className="bg-[#EBF8FF] rounded-[20px] p-[32px] flex flex-col gap-[41px]">
              <img src={feature.icon} alt='device' className="w-[45px] h-[45px]" />
              <div className="flex flex-col gap-[10px]">
                <h3 className="text-[#03377D] text-[24px] font-[Manrope] font-medium text-nowrap">{feature.title}</h3>
                <p className="text-[#7C7C7C] font-[Lato] text-[16px] leading-6">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 pt-[20px] gap-[24px] ">
        {aboutVisionJson.map((feature, index) => (
          <div key={index} className="bg-[#EBF8FF] p-[32px] rounded-[20px] h-[319px] flex flex-col justify-between">
            <img src={feature.icon} alt='device' className="w-[45px] h-[45px]" />
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[#03377D] text-[24px] font-[Manrope] font-medium text-nowrap">{feature.title}</h3>
              <p className="text-[#7C7C7C] font-[Lato] text-[16px] leading-6">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;