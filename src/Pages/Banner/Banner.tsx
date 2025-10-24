/* eslint-disable @typescript-eslint/no-explicit-any */
// import Layout from '../../layout/Layout'
import FortipaySvg from '../../assets/correctfortipay.svg'
import Navbar from '../../components/Navbar/Navbar'
import { useContentful } from '../../contexts/ContentfulContext'
const Banner = () => {
  const { bannerText, bannerSubText, isLoading } = useContentful()
  return (

    <div className="relative w-full min-h-screen  bg-white flex flex-col mb-[100px]">
      <img src={FortipaySvg} className="absolute inset-0 w-full h-full object-cover" />
      <Navbar />
      <div className="relative z-10 flex w-full flex-1 flex-col justify-center items-center">

        <div className=' h-[204px] w-[720px] flex justify-center flex-col items-center mt-[60px]'>
          {isLoading ? (
            <div className='animate-pulse flex flex-col items-center gap-4'>
              <div className='h-14 bg-gray-300 rounded w-[600px]'></div>
              <div className='h-6 bg-gray-300 rounded w-[450px]'></div>
            </div>
          ) : (
            <>
              <p className='font-[Manrope] text-[56px] text-[#03377D] w-[700px] max-w-[800px] min-w-[500px] text-center'>{bannerText}</p>
              <p className='text-[#848484] font-semibold font-[Lato] text-center w-[550px] max-w-[600px] min-w-[400px]'>{bannerSubText}</p>
            </>
          )}
        </div>
        <div className="flex gap-[300px]  w-full justify-center items-center mt-[150px] ">
          <div className='w-[250px] h-[300px] bg-green-500'>Image One</div>
          <div className='w-[250px] h-[300px] bg-blue-500'>Image Two</div>
        </div>
      </div>
    </div>

  )
}

export default Banner