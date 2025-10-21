// import Layout from '../../layout/Layout'
import FortipaySvg from '../../assets/correctfortipay.svg'
import Navbar from '../../components/Navbar/Navbar'
const Banner = () => {
  return (

    <div className="relative w-full min-h-screen  bg-white flex flex-col mb-[100px]">
      <img src={FortipaySvg} className="absolute inset-0 w-full h-full object-cover" />
      <Navbar />
      <div className="relative z-10 flex w-full flex-1 flex-col justify-center items-center">

        <div className=' h-[204px] w-[720px] flex justify-center flex-col items-center mt-[60px]'>
          <p className='font-[Manrope] text-[56px] text-[#03377D] w-[700px] max-w-[800px] min-w-[500px] text-center'>Smarter Fraud Detection for Safer Payments</p>
          <p className='text-[#848484] font-semibold font-[Lato] text-center w-[550px] max-w-[600px] min-w-[400px]'>AI-powered fraud and chargeback prevention platform that protects revenue and keeps every payment secure.</p>
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