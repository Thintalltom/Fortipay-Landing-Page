import AboutSVG from '../../assets/BlogSvg.svg'
import Navbar from '../../components/Navbar/Navbar'
import TagButton from '../../components/TagButton'
import envelope from '../../assets/EnvelopeOpen.svg'
import Chat from '../../assets/ChatTeardrop.svg'
import Phone from '../../assets/Phone (1).svg'
import Location from '../../assets/Vector (2).svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitterX.svg'
import insta from '../../assets/insta.svg'
import linkedin from '../../assets/linkedin.svg'
import youtube from '../../assets/youtube.svg'
const Banner = () => {
  const ContactDetails = [
    {
      icon: envelope,
      header: 'Email',
      text: 'Stay updated and get in touch directly.',
      email: 'hey@gmail.com'
    },
    {
      icon: Chat,
      header: 'Chat',
      text: 'Message us any time for quick call',
      email: 'Start Conversation'
    },
    {
      icon: Location,
      header: 'Office',
      text: 'Visit or write to us at:',
      email: '1980 Mission Street, San Francisco, CA 94103, USA'
    },
    {
      icon: Phone,
      header: 'Phone',
      text: 'Speak to our team for support',
      email: '+1 (455) 555-0198'
    }
  ]
  const icons = [
      facebook, twitter, insta, linkedin, youtube
  ]
  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col mb-[100px]">
      <img src={AboutSVG} className="absolute inset-0 w-full h-full object-cover" />
      <Navbar />
      <div className="relative z-10 flex w-full flex-1 flex-col p-[80px]">
        <div className='flex justify-start '>

          <TagButton>CONTACT US</TagButton>
        
        </div>
        <div>
            <h4 className='text-[#03377D] font-[Manrope] text-[36px]'>Get In Touch</h4>
          <p className='text-[#848484] font-[Lato] text-[16px] '>Explore how Sirius can transform your workflow and elevate your team’s collaboration.</p>
        </div>
        <div className='grid grid-cols-2 relative top-[50px] w-full '>
    <div className='grid grid-cols-2 gap-[20px]'>
      {ContactDetails.map((contact, index) => (
        <div key={index} className=''>
          <div className='flex gap-[10px] flex-col'>
            <div className='p-[16px] rounded-[10px] bg-[#EBF8FF] w-[56px]'>
            <img src={contact.icon} className='w-[24px] h-[24px]' />
            </div>
            <h4 className='text-[#2A2A2A] font-[Manrope] text-[16px] font-semibold'>{contact.header}</h4>
          </div>
          <p className='text-[#848484] font-[Lato] text-[14px]  font-normal'>{contact.text}</p>
          <button className='text-[#33B7FF] font-[Lato] text-[10px] font-semibold text-nowrap'>{contact.email}</button>
        </div>
      ))}
      <div className='flex flex-wrap gap-[16px]'>
        {icons.map((icon, index) => (
          <img key={index} src={icon} className='w-[16px] h-[16px]' />
        ))}
        </div>
    </div>
    <div className='border rounded-[24px] p-[32px] bg-white'>
      <form className='flex flex-col gap-[20px] bg-white'>
        <div>
          <label className='block text-[#2A2A2A] font-[Manrope] text-[14px] font-semibold mb-2'>Name</label>
          <input type='text' className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#03377D]' placeholder='Enter your name' />
        </div>
        <div>
          <label className='block text-[#2A2A2A] font-[Manrope] text-[14px] font-semibold mb-2'>Email</label>
          <input type='email' className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#03377D]' placeholder='Enter your email' />
        </div>
        <div>
          <label className='block text-[#2A2A2A] font-[Manrope] text-[14px] font-semibold mb-2'>Message</label>
          <textarea rows={4} className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#03377D] resize-none' placeholder='Enter your message'></textarea>
        </div>
        <button type='submit' className='bg-[#03377D] text-white py-3 px-6 rounded-full font-[Manrope] font-semibold '>
          Send Message
        </button>
      </form>
      </div>
        </div>

      </div>
    </section>
  )
}

export default Banner