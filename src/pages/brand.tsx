import React from "react"
import Header from "../components/header"
import BrandComponent from "../components/brandComponents/brand"
import Copyright from "../components/copyright"
import SEO from "../components/seo"

const Brand: React.FC = () => {
  return (
    <>
      <SEO />
      <Header />
      <BrandComponent />
      <Copyright />
    </>
  )
}

export default Brand
