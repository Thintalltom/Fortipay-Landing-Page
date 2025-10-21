
import FortPay from '../../assets/BlueForti.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="relative z-10 p-4 flex justify-center items-center">
            <div className='flex gap-[40px] md:gap-[60px] lg:gap-[80px] w-full max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] px-[12px] md:px-[14px] lg:px-[16px] py-[20px] md:py-[22px] lg:py-[24px] rounded-[50px] justify-center items-center h-[64px] md:h-[68px] lg:h-[72px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]'>
                <img src={FortPay} />
                <div className='flex gap-[40px] font-[Lato] text-[#848484] text-[14px]'>
                    <Link to='/'>Home</Link>
                    <Link to='/solution'>Solution</Link>
                    <Link to='/about'>About us</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact Us</Link>
                </div>
                <div className='flex gap-[20px]'>
                    <button className='border-[#03377D] border-[1px] rounded-[40px] text-[14px] font-[Lato] font-semibold py-[10px] px-[16px] text-[#03377D]'>Join Waitlist</button>
                    <button className='border-[#03377D] border-[1px] rounded-[40px] text-[14px] font-[Lato] text-white bg-[#03377D] font-semibold py-[10px] px-[16px]'>Request Demo</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar