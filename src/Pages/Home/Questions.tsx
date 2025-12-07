import { Accordion } from '../../components/Accordion/Accordion'
import TagButton from '../../components/TagButton'
import QuestionsIcon from '../../assets/Questions.png' 
import { useContentful } from '../../contexts/ContentfulContext'
const Questions = () => {
       const { questionText, questionSubText } = useContentful()
  return (
    <section className='p-[80px]'>

       <div className='flex justify-between items-start  gap-8'>
        <div className='flex-1 '>
              <TagButton>SECTION TITLE</TagButton>
              <p className='font-[Manrope] text-[38px] font-medium text-[#0259cc]'>{questionText}</p>
              {/* <p className='font-[Manrope] text-[38px] font-medium text-[#0259cc]'>Answered.</p> */}
              <p className='text-[#848484] font-[Lato] text-[16px]'>{questionSubText}</p>
              <img src={QuestionsIcon} alt="" />
        </div>
        <div className='flex-1'>

           <Accordion />
           <div className='border-[1px] rounded-[12px] mt-[20px] px-[24px] py-[22px] flex justify-between items-center'>
            <div>
            <p className='font-[Manrope] font-medium text-[#2A2A2A] text-[20px]'>Still have a question in mind?</p>
            <p className='text-[#848484] font-[Lato] font-normal text-[16px]'>Contact us if you have any other questions.</p>
            </div>
            <button className='bg-[#0259cc] text-white px-[16px] py-[8px] rounded-[40px] text-[16px] h-[40px] font-[Lato]'>Contact us</button>
           </div>
        </div>
    </div>
    </section>
   
  )
}

export default Questions