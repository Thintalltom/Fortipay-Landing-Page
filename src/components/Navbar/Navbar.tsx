

import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    
    const isActive = (path: string) => location.pathname === path
    
    return (
        <nav className="relative z-10 p-4 flex justify-center items-center">
            <div className='flex gap-[40px] md:gap-[60px] lg:gap-[80px] w-full max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] px-[12px] md:px-[14px] lg:px-[16px] py-[20px] md:py-[22px] lg:py-[24px] rounded-[50px] justify-center items-center h-[64px] md:h-[68px] lg:h-[72px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]'>
                <img src={"https://images.ctfassets.net/t38lsvt2xzqb/4KgJmfTc9gAmfDkZKj05os/a8f178ec2d18feaa7cb4582677048353/CorvynAI-removebg-preview.png"} className='w-[135px] ' />
                <div className='flex gap-[40px] font-[Lato] text-[14px]'>
                    <Link to='/' className={isActive('/') ? 'text-[#03377D]' : 'text-[#848484]'}>Home</Link>
                    <Link to='/solution' className={isActive('/solution') ? 'text-[#03377D]' : 'text-[#848484]'}>Solution</Link>
                    <Link to='/about' className={isActive('/about') ? 'text-[#03377D]' : 'text-[#848484]'}>About us</Link>
                    <Link to='/blog' className={isActive('/blog') ? 'text-[#03377D]' : 'text-[#848484]'}>Blog</Link>
                    <Link to='/contact' className={isActive('/contact') ? 'text-[#03377D]' : 'text-[#848484]'}>Contact Us</Link>
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