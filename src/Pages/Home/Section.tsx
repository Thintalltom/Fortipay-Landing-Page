import TagButton from '../../components/TagButton'
import InfiniteScroll from '../../components/InfiniteScroller'
import { useContentful } from '../../contexts/ContentfulContext'
const Section = () => {
      const { customerText, customerSubText } = useContentful()
  return (
    <div className='bg-white '>
      <div className='flex justify-center flex-col gap-[20px] items-center'>
        <TagButton>SECTION TITLE</TagButton>
        <p className="text-[38px] text-[#03377D] font-[Manrope] font-medium">{customerText}</p>
        <p className="font-[Lato] text-[#848484] mb-[80px] font-normal">{customerSubText}</p>
      </div>
        <InfiniteScroll />
    </div>
  )
}

export default Section