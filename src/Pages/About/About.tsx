import Banner from "./Banner"
import ImageSection from "./ImageSection"
import Vision from "./Vision"
import Team from "./Team"
import SEO from "../../components/SEO/SEO"

const About = () => {
  return (
    <div>
      <SEO
        title="About Corvyn AI - Our Mission & Team"
        description="Learn about Corvyn AI's mission to provide secure payment solutions and meet our expert team."
        url="replace with about url"
      />
      <Banner />
      <ImageSection />
      <Vision />
      <Team />
    </div>
  )
}

export default About