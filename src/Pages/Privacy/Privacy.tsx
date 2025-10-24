import Banner from "./Banner"
import { PrivacyPage } from "./PrivacyPage"
import SEO from "../../components/SEO/SEO"

const Privacy = () => {
  return (
    <div>
      <SEO
        title="Privacy Policy - FortiPay"
        description="Read FortiPay's privacy policy to understand how we protect and handle your data."
        url="replace with privacy url"
      />
      <Banner />
      <PrivacyPage />
    </div>
  )
}

export default Privacy