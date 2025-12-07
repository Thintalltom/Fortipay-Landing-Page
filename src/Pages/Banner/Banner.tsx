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
              <p className='font-[Manrope] text-[56px] text-[#0259cc] w-[700px] max-w-[800px] min-w-[500px] text-center'>{bannerText}</p>
              <p className='text-[#848484] font-semibold font-[Lato] text-center w-[550px] max-w-[600px] min-w-[400px]'>{bannerSubText}</p>
            </>
          )}
        </div>
        <div className="flex gap-[300px]  w-full justify-center items-end mt-[150px] ">
          <div className='w-[400px] h-[400px]'><img src='https://images.ctfassets.net/t38lsvt2xzqb/Vgv8XXKqaCPwiVXA0n8ts/1aaa7e41fd8c1ee821c68e8ad7b77fd8/sim_lifecycle_img.png?h=250' className='w-full h-full object-cover' /></div>
          <div className='w-[400px] h-[400px]'><img src='https://images.ctfassets.net/t38lsvt2xzqb/36ShLetAwJgcWT3WKtEeIf/823588e68f589952b5e118a1d5c1d6f0/corvyn1ng2.png?h=250' className='w-full h-full object-cover' /></div>
        </div>
      </div>
    </div>

  )
}

export default Banner