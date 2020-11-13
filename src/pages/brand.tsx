import React from "react"
import Header from "../components/header"
import BrandComponent from "../components/brandComponent"
import CopyrightCcomponent from "../components/copyrightComponent"
import SEO from "../components/seo"

const Brand: React.FC = () => {
  return (
    <>
      <SEO />
      <Header />
      <BrandComponent />
      <CopyrightCcomponent />
    </>
  )
}

export default Brand
