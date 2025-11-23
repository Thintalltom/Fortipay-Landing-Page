import Banner from './Banner/Banner'
import Trusted from './Home/Trusted'
import { HowItWorks } from './Home/HowItWorks'
import ValuePreposition from './Home/ValuePreposition'
import Pricing from './Home/Pricing'
import Section from './Home/Section'
import Questions from './Home/Questions'
import BlogSection from './Home/BlogSection'
import GetStartedSection from './Home/GetStartedSection'
import SEO from '../components/SEO/SEO'

const Home = () => {
    return (
        <div>
             <SEO
        title="Corvyn AI - Fast Payments for Business"
        description="Accept and send payments with Corvyn AI across Africa securely."
        url=" replace with url"
      />
            <Banner />
            <Trusted />
            <ValuePreposition />
            <HowItWorks />
            <Pricing />
            <Section />
            <Questions />
        <BlogSection />
        <GetStartedSection />
        </div>


    )
}

export default Home