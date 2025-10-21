
import FortipaySvg from '../../assets/correctfortipay.svg'
import Navbar from '../../components/Navbar/Navbar'
const Banner = () => {
  return (
    
    <section className="relative w-full min-h-screen bg-white flex flex-col mb-[100px]">
      <img src={FortipaySvg} className="absolute inset-0 w-full h-full object-cover" />
      <Navbar />
      <div className="relative z-10 flex w-full p-[80px] justify-between  ">

       <div className=' flex flex-col'>
        <h3 className='w-[500px] pt-[50px] text-[42px] font-[Manrope] font-medium'><span className='text-[#5579A8]'>Fraud Protection That</span> <span className='text-[#03377D]'>Adapts to Your Business</span></h3>
        <div className="flex gap-[20px] pt-[20px]">
            <button className='bg-[#03377D] text-white font-[Lato] min-w-[180px] max-w-[185px] font-normal text-[16px] py-[10px] px-[20px] rounded-[40px]'>Get Started</button>
                    <button className=' text-[#03377D] font-[Lato] min-w-[180px] max-w-[185px] font-normal text-[16px] py-[10px] px-[20px] rounded-[40px] bg-[#EBF8FF]'>Request a Demo</button>
        </div>
       </div>
       <div className='ml-[40px]'>
       <p className='text-[#848484] font-[Lato] leading-loose w-[500px]'>Fraud tactics evolve quickly, and static tools can’t keep up. FortiPay uses real-time AI, behavioral analytics, and device intelligence to learn from every transaction and stop threats before they reach your checkout. Our adaptive fraud engine doesn’t just block suspicious activity—it adjusts instantly to your unique risk patterns and industry needs.

        Whether you’re running a fast-growing startup or managing a large enterprise, FortiPay scales seamlessly with your business. You get enterprise-grade protection without the complexity, ensuring your revenue, reputation, and customer trust stay secure—no matter how fraud evolves.
</p>
       </div>
      </div>
    </section>
  )
}

export default Banner