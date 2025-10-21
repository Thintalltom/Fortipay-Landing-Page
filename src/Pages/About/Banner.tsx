import AboutSVG from '../../assets/About-SVG.svg'
import Navbar from '../../components/Navbar/Navbar'
const Banner = () => {
    return (
        <section className="relative w-full min-h-screen bg-white flex flex-col mb-[100px]">
            <img src={AboutSVG} className="absolute inset-0 w-full h-full object-cover" />
            <Navbar />

            <div className='flex justify-center items-center relative z-10  h-full px-[80px] pt-[80px] pb-[40px] flex-col'>
                <h3 className='text-[64px] font-[Manrope] font-medium text-center'><span className='text-[#5579A8]'>Our Mission:</span><br/>
                    <span className='text-[#03377D]'>Safer Payments for Everyone</span>
                </h3>
                {/* <h3 className='text-[64px] font-[Manrope] text-[#03377D] font-medium '>/h3> */}
                <p className='text-center lg:w-[900px] 2xl:w-[700px] xl:[800px] font-[Lato] text-[16px] font-regular text-[#5E5E5E] leading-6'>At FortiPay, we’re redefining trust in digital payments. Our mission is to protect businesses and their customers from fraud, chargebacks, and financial risks with advanced AI-driven security solutions. We provide real-time transaction monitoring, intelligent risk scoring, device fingerprinting, and identity verification, helping businesses stay one step ahead of fraudsters while ensuring seamless customer experiences. FortiPay is built for growth, offering scalable fraud prevention tools that integrate effortlessly into your systems, giving you peace of mind to focus on what matters most which is growing your business.</p>
            </div>
        </section>
    )
}

export default Banner