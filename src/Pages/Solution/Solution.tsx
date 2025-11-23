import Banner from "./Banner"
import Features from './Features'
import ImageSection from "./ImageSection"
import Industries from "./Industries"
import NewsLetter from "./NewsLetter"
import WhyFortiPay from "./WhyFortiPay"
import SEO from "../../components/SEO/SEO"

const Solution = () => {
  return (
    <div>
      <SEO
        title="Corvyn AI Solutions - Fraud Protection & Payment Security"
        description="Discover Corvyn AI's comprehensive fraud detection and payment security solutions for businesses."
        url="replace with solution url"
      />
      <Banner />
      <ImageSection />
      <Features />
      <Industries />
      <WhyFortiPay />
      <NewsLetter />
    </div>
  )
}

export default Solution