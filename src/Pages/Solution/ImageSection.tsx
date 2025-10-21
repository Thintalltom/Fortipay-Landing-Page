import LockImge from '../../assets/padlock.png'
const ImageSection = () => {
  return (
    <div className='p-[80px]  h-fit'>
        <div className='relative justify-center items-center flex mt-[-225px] h-fit '>
            <img src={LockImge} alt='Lock Image' className='h-[714px] flex-1 w-[1280px]' />
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-100'></div>
            
        </div>
       
    </div>

  )
}

export default ImageSection