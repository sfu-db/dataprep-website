import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import BrandComponent from "../components/brandComponent"
import CopyrightCcomponent from "../components/copyrightComponent"

const Brand: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Brand | DataPrep - The fastest way to do data preparation in Python
        </title>
        <link rel="canonical" href="http://dataprep.ai" />
      </Helmet>
      <Header />
      <BrandComponent />
      <CopyrightCcomponent />
    </>
  )
}

export default Brand
