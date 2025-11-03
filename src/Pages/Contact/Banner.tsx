import AboutSVG from '../../assets/BlogSvg.svg'
import Navbar from '../../components/Navbar/Navbar'
import TagButton from '../../components/TagButton'
import envelope from '../../assets/EnvelopeOpen.svg'
import Chat from '../../assets/ChatTeardrop.svg'
import Phone from '../../assets/Phone (1).svg'
import Location from '../../assets/Vector (2).svg'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useContentful } from '../../contexts/ContentfulContext'
const Banner = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [emailError, setEmailError] = useState('')
  const { footerLinks } = useContentful()

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setFormData({...formData, email})
    
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  const isFormValid = () => {
    return formData.name.trim() && 
           formData.email.trim() && 
           formData.message.trim() && 
           validateEmail(formData.email) && 
           !emailError
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isFormValid()) {
      return
    }
    
    setIsLoading(true)
    
    try {
      await emailjs.send(
        'service_7s5zf99',
        'template_7c21dti',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '8_4ytZKJBDi0KjM6c'
      )
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
      setEmailError('')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const ContactDetails = [
    {
      icon: envelope,
      header: 'Email',
      text: 'Stay updated and get in touch directly.',
      email: 'contact@fortipay.ai'
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
          {contact.header === 'Email' ? (
            <a 
              href={`mailto:${contact.email}`}
              className='text-[#33B7FF] font-[Lato] text-[10px] font-semibold text-nowrap hover:underline cursor-pointer'
            >
              {contact.email}
            </a>
          ) : (
            <button className='text-[#33B7FF] font-[Lato] text-[10px] font-semibold text-nowrap'>{contact.email}</button>
          )}
        </div>
      ))}
      <div className='flex flex-wrap gap-[16px]'>
        {footerLinks.map((icon, index) => (
          <a href={icon.link} key={index} target='_blank' className=''>
            <img src={icon.icon} className='w-[16px] h-[16px]' />
          </a>
        ))}
        </div>
    </div>
    <div className='border rounded-[24px] p-[32px] bg-white'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-[20px] bg-white'>
        <div>
          <label className='block text-[#2A2A2A] font-[Manrope] text-[14px] font-semibold mb-2'>Name</label>
          <input 
            type='text' 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#03377D]' 
            placeholder='Enter your name' 
            required 
          />
        </div>
        <div>
          <label className='block text-[#2A2A2A] font-[Manrope] text-[14px] font-semibold mb-2'>Email</label>
          <input 
            type='email' 
            value={formData.email}
            onChange={handleEmailChange}
            className={`w-full p-3 border rounded-lg focus:outline-none ${
              emailError ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#03377D]'
            }`}
            placeholder='Enter your email' 
            required 
          />
          {emailError && <p className='text-red-500 text-sm mt-1'>{emailError}</p>}
        </div>
        <div>
          <label className='block text-[#2A2A2A] font-[Manrope] text-[14px] font-semibold mb-2'>Message</label>
          <textarea 
            rows={4} 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#03377D] resize-none' 
            placeholder='Enter your message'
            required
          ></textarea>
        </div>
        <button 
          type='submit' 
          disabled={isLoading || !isFormValid()}
          className={`py-3 px-6 rounded-full font-[Manrope] font-semibold transition-all ${
            isFormValid() && !isLoading 
              ? 'bg-[#03377D] text-white hover:bg-[#024a8a]' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      </div>
        </div>

      </div>
    </section>
  )
}

export default Banner