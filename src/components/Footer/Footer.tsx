/* eslint-disable no-irregular-whitespace */
import FortiPay from '../../assets/FORTIPAYUNDER.svg'
import FooterImg from '../../assets/FooterFortpay.png' 
import FortyLogo from '../../assets/FortiPay.svg'
import { footerData } from '../../Constant/Constant'
const Footer = () => {
  return (
    <footer className='relative z-10 bg-[#03377D] w-full mt-auto min-h-[200px] flex flex-col items-center justify-center'>
        <img src={FooterImg} className="absolute inset-0 w-full h-full object-cover" />
        <div className='p-[80px] text-white flex justify-between  w-full'>
          <div className='flex flex-col gap-[10px]'>
        <img src={FortyLogo} alt='fortipay logo' className='w-[145px] h-[30px]' />
        <div className='w-[410px] text-[14px]'>
          <p>Shark illustration barn seems parking hits tiger globalize forward who's. Cross-pollination optimize obviously due deploy day stronger. Practices looking looking caught supervisor principles eat. Needle field including after where door.</p>
        </div>
          </div>
           <div className='grid grid-cols-4 gap-[40px]'>
          {footerData.map((footer, index) => (
            <div key={index} className='flex flex-col gap-[10px]'>
              <p className='font-semibold text-[16px]'>{footer.header}</p>
              <div className='flex flex-col gap-[8px]'>
                {footer.text.map((text, textIndex) => (
                  <a key={textIndex} className='text-[14px] cursor-pointer opacity-80'>{text}</a>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
        {/* <img src={FortiPay} alt='fotipay image' /> */}
        <img src={FortiPay} alt='fortipay under logo' />
        <div className='p-[80px] w-full'>

        <hr className='border-[0.5px] padding-b-[20px] w-full' />
        <div className='flex gap-[10px] text-white'>
      <p>© 2099 Palm UI</p> <p>.</p> <p>Terms</p><p>.</p> <p>Privacy</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer