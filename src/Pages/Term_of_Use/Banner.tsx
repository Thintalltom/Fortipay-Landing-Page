import AboutSVG from '../../assets/BlogSvg.svg'
import Navbar from '../../components/Navbar/Navbar'
import Privacybg from '../../assets/privacybg.png'
import TagButton from '../../components/TagButton'
const Banner = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col ">
              <img src={AboutSVG} className="absolute inset-0 w-full h-full object-cover" />
            <Navbar />
            <div className="relative z-10 flex w-full flex-1 flex-col justify-center items-center">
            <div className=' px-[80px] '>
                <div className='relative rounded-[24px] py-[120px] px-[64px] min-w-[1100px] 2xl:max-w-[1280px] lg:max-w-[1280px] lg:max-h-[366px]'>
                    <img src={Privacybg} className="absolute inset-0 w-full h-full object-cover rounded-[24px]" />
                <div className='relative z-10 flex justify-center items-center flex-col'>
                    <TagButton>LAST UPDATED: JAN 2025</TagButton>
                    <h4 className='text-[#03377D] font-[Manrope] text-[36px]'>We care about your privacy</h4>
                    <p className='text-[#848484] font-[Lato] text-[16px] '>Explore how Sirius can transform your workflow and elevate your team’s collaboration.</p>
                </div>
                </div>
            </div>
            </div>
        </section>
  )
}

export default Banner