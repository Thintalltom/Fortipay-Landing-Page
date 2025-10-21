// import AboutSVG from '../../assets/BlogSvg.svg'
import Navbar from '../../components/Navbar/Navbar'
import TagButton from '../../components/TagButton'
import BlogTabs from '../../components/BlogTabs/BlogTabs'
import Image1 from '../../assets/Rectangle 10 (1).svg'
import Image2 from '../../assets/Rectangle 10 (2).svg'
import Image3 from '../../assets/Rectangle 10.svg'
const Banner = () => {
  // Sample blog data
  const blogData = [
    {
      image: Image1,
      Header: 'Navigating the Crypto Landscape: A Guide for Fintech Innovators.',
      Text: "Understand the opportunities and challenges of integrating blockchain into your fintech strategy. Understand the opportunities and challenges of integrating blockchain into your fintech strategy.",
      date: '10th June, 2024',
      read: '7 min read',
      category: 'design'
    },
    {
      image: Image2,
      Header: 'Building Scalable Payment Systems',
      Text: "Learn how to architect payment systems that can handle millions of transactions while maintaining security and reliability.",
      date: '15th June, 2024',
      read: '5 min read',
      category: 'engineering'
    },
    {
      image: Image3,
      Header: 'Company Culture in Remote Teams',
      Text: "Discover strategies for building strong company culture when your team is distributed across the globe.",
      date: '20th June, 2024',
      read: '4 min read',
      category: 'company'
    },
    {
      image: Image1,
      Header: 'Navigating the Crypto Landscape: A Guide for Fintech Innovators.',
      Text: "Understand the opportunities and challenges of integrating blockchain into your fintech strategy. Understand the opportunities and challenges of integrating blockchain into your fintech strategy.",
      date: '10th June, 2024',
      read: '7 min read',
      category: 'design'
    },
    {
      image: Image2,
      Header: 'Building Scalable Payment Systems',
      Text: "Learn how to architect payment systems that can handle millions of transactions while maintaining security and reliability.",
      date: '15th June, 2024',
      read: '5 min read',
      category: 'news'
    },
    {
      image: Image3,
      Header: 'Company Culture in Remote Teams',
      Text: "Discover strategies for building strong company culture when your team is distributed across the globe.",
      date: '20th June, 2024',
      read: '4 min read',
      category: 'company'
    }, 
    {
      image: Image1,
      Header: 'Navigating the Crypto Landscape: A Guide for Fintech Innovators.',
      Text: "Understand the opportunities and challenges of integrating blockchain into your fintech strategy. Understand the opportunities and challenges of integrating blockchain into your fintech strategy.",
      date: '10th June, 2024',
      read: '7 min read',
      category: 'design'
    },
    {
      image: Image2,
      Header: 'Building Scalable Payment Systems',
      Text: "Learn how to architect payment systems that can handle millions of transactions while maintaining security and reliability.",
      date: '15th June, 2024',
      read: '5 min read',
      category: 'engineering'
    },
    {
      image: Image3,
      Header: 'Company Culture in Remote Teams',
      Text: "Discover strategies for building strong company culture when your team is distributed across the globe.",
      date: '20th June, 2024',
      read: '4 min read',
      category: 'company'
    },
    {
      image: Image1,
      Header: 'Navigating the Crypto Landscape: A Guide for Fintech Innovators.',
      Text: "Understand the opportunities and challenges of integrating blockchain into your fintech strategy. Understand the opportunities and challenges of integrating blockchain into your fintech strategy.",
      date: '10th June, 2024',
      read: '7 min read',
      category: 'design'
    },
    {
      image: Image2,
      Header: 'Building Scalable Payment Systems',
      Text: "Learn how to architect payment systems that can handle millions of transactions while maintaining security and reliability.",
      date: '15th June, 2024',
      read: '5 min read',
      category: 'news'
    },
    {
      image: Image3,
      Header: 'Company Culture in Remote Teams',
      Text: "Discover strategies for building strong company culture when your team is distributed across the globe.",
      date: '20th June, 2024',
      read: '4 min read',
      category: 'company'
    }
  ]

  return (
    <div>
      <section className="relative w-full min-h-screen bg-white flex flex-col mb-[50px]">
        {/* <img src={AboutSVG} className="absolute inset-0 w-full h-full object-cover" /> */}
        <Navbar />
        <div className='flex justify-center items-center relative z-10 h-full px-[80px] pt-[80px]  flex-col'>
          <TagButton>INSIGHTS & IDEAS</TagButton>
          <h3 className='font-[Manrope] text-[38px] text-[#03377D] w-[700px] max-w-[800px] min-w-[500px] text-center'>Latest Blog Post</h3>
          <p className='text-[#848484] font-regular font-[Lato] text-center w-[550px] max-w-[600px] min-w-[400px] text-[16px]'>Discover stories, tips, and resources to inspire your next big idea.</p>
        </div>
      <BlogTabs blogData={blogData} />
      <div className='flex justify-center items-center'>

      <button className='px-[20px] py-[8px] bg-[#EBF8FF] text-[Lato] text-[#03377D] font-semibold rounded-full'>Load more</button>
      </div>
      </section>
    </div>
  )
}


export default Banner