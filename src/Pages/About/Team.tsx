
import TagButton from '../../components/TagButton'
import Human from '../../assets/human.png'
const Team = () => {
    const TeamText = [
        {
            image: Human,
            name: 'Grace Miller',
            text: 'CTO'
        },
         {
            image: Human,
            name: 'Grace Miller',
            text: 'CTO'
        },
         {
            image: Human,
            name: 'Grace Miller',
            text: 'CTO'
        },
         {
            image: Human,
            name: 'Grace Miller',
            text: 'CTO'
        },
         {
            image: Human,
            name: 'Grace Miller',
            text: 'CTO'
        }, {
            image: Human,
            name: 'Grace Miller',
            text: 'CTO'
        }, {
            image: Human,
            name: 'Grace Miller',
            text: 'CTO'
        }, {
            image: Human,
            name: 'Grace Miller',
            text: 'CTO'
        }, {
            image: Human,
            name: 'Grace Miller',
            text: 'CTO'
        }, {
            image: Human,
            name: 'Grace Miller',
            text: 'CTO'
        },
    ]
  return (
    <div className='px-[80px] pt-[80px] pb-[40px]'>
        <div className='flex justify-center items-center flex-col'>
        <TagButton>MEET OUR TEAM</TagButton>
        <h3 className='text-[#03377D] font-[Manrope] font-medium text-[38px]'>The Brains Behind the Product</h3>
        <p className='text-[#848484] text-[16px] font-[Lato] font-normal'>crew building things we believe in together.</p>
        </div>
        <div className='grid grid-cols-5 gap-[20px] mt-[40px]'>
            {TeamText.map((item, index) => (
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