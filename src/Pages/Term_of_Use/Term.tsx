import Banner from "./Banner"
import { TermsPage } from "./TermsPage"
import SEO from "../../components/SEO/SEO"

const Term = () => {
  return (
    <div>
      <SEO
        title="Terms of Use - FortiPay"
        description="Review FortiPay's terms of use and service agreements for our payment security platform."
        url="replace with terms url"
      />
      <Banner />
      <TermsPage />
    </div>
  )
}

export default Term