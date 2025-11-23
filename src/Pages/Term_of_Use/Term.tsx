import Banner from "./Banner"
import { TermsPage } from "./TermsPage"
import SEO from "../../components/SEO/SEO"

const Term = () => {
  return (
    <div>
      <SEO
        title="Terms of Use - Corvyn AI"
        description="Review Corvyn AI's terms of use and service agreements for our payment security platform."
        url="replace with terms url"
      />
      <Banner />
      <TermsPage />
    </div>
  )
}

export default Term