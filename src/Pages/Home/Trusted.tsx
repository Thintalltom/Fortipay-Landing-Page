
import FooterImg from '@/assets/FooterFortpay.png'
import placeLogo from '@/assets/Placement Logos (1).svg'
import placeLogo2 from '@/assets/Placement Logos (2).svg'
import placeLogo3 from '@/assets/Placement Logos (3).svg'
import placeLogo4 from '@/assets/Placement Logos (4).svg'
import placeLogo5 from '@/assets/Placement Logos (5).svg'
import placeLogo6 from '@/assets/Placement Logos (6).svg'
import placeLogo7 from '@/assets/Placement Logos (7).svg'
import placeLogo8 from '@/assets/Placement Logos.svg'
import placeLogo9 from '@/assets/Frame 4 (1).svg'
import placeLogo10 from '@/assets/Frame 4.svg'
const Trusted = () => {
  return (
    <div className="relative w-full h-[268px] bg-gradient-to-b from-[#0564E3] to-[#03377D] px-[64px] py-[80px] mb-[40px]">
                <img src={FooterImg} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
                <div className="relative z-10  text-white flex justify-between">
                    <div className='flex flex-col '>

                        <h5 className='font-[Manrope] text-[30px] w-[300px]'>Trusted by forward-thinking businesses.</h5>
                        <p className='w-[400px] font-[Lato] text-[16px] text-light'>Leading companies rely on FortiPay to secure transactions and protect customer trust.</p>
                    </div>
                    <div className='grid grid-cols-5 gap-4'>
                     

                            <img src={placeLogo} alt='placement logo' />
                            <img src={placeLogo2} alt='placement logo' />
                            <img src={placeLogo3} alt='placement logo' />
                            <img src={placeLogo4} alt='placement logo' />
                            <img src={placeLogo5} alt='placement logo' />
                            

                   
                            <img src={placeLogo6} alt='placement logo' />
                            <img src={placeLogo7} alt='placement logo' />
                            <img src={placeLogo8} alt='placement logo' />
                            <img src={placeLogo9} alt='placement logo' />
                            <img src={placeLogo10} alt='placement logo' />

                    
                    </div>
                </div>
            </div>
  )
}

export default Trusted