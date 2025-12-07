
import TagButton from '../../components/TagButton'
import { useContentful } from '../../contexts/ContentfulContext'
const Team = () => {
        const { AboutTeamJson, isLoading } = useContentful()

  if (isLoading) {
    return (
      <div className='px-[80px] pt-[80px] pb-[40px]'>
        <div className='flex justify-center items-center flex-col'>
          <div className='bg-gray-200 animate-pulse h-8 w-32 rounded mb-4'></div>
          <div className='bg-gray-200 animate-pulse h-10 w-80 rounded mb-2'></div>
          <div className='bg-gray-200 animate-pulse h-6 w-64 rounded'></div>
        </div>
        <div className='grid grid-cols-5 gap-[20px] mt-[40px]'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div className='flex flex-col items-center' key={index}>
              <div className='bg-gray-200 animate-pulse w-[154px] h-[207px] rounded mb-4'></div>
              <div className='bg-gray-200 animate-pulse h-5 w-24 rounded mb-2'></div>
              <div className='bg-gray-200 animate-pulse h-4 w-20 rounded'></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='px-[80px] pt-[80px] pb-[40px]'>
        <div className='flex justify-center items-center flex-col'>
        <TagButton>MEET OUR TEAM</TagButton>
        <h3 className='text-[#0259cc] font-[Manrope] font-medium text-[38px]'>The Brains Behind the Product</h3>
        <p className='text-[#848484] text-[16px] font-[Lato] font-normal'>crew building things we believe in together.</p>
        </div>
        <div className='grid grid-cols-5 gap-[20px] mt-[40px]'>
            {AboutTeamJson.map((item, index) => (
                <div className='flex flex-col items-center' key={index}>
                    <img src={item.image} className='mx-auto w-[154px] h-[207px]' />
                    <div className='flex flex-col'>
                        <h3 className='text-[#000000] font-[Lato] font-medium text-center text-[16px]'>{item.name}</h3>
                        <p className='text-[#848484] text-center text-[14px] font-[Lato] font-semibold'>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Team