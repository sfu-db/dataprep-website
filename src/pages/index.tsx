import React from "react"
import Header from "../components/header"
import WaveLayoutBottom from "../components/waveLayoutBottom"
import FooterComponent from "../components/footerComponent"
import FadeSection from "../components/fadeSection"
import CopyrightCcomponent from "../components/copyrightComponent"
import SectionComponent from "../components/sectionComponent"
import CompComponent from "../components/compComponent"
import SectionLayout from "../components/sectionLayout"
import { Helmet } from "react-helmet"

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          DataPrep -- The fastest way to do data preparation in Python
        </title>
        <link rel="canonical" href="http://dataprep.ai" />
      </Helmet>
      <WaveLayoutBottom>
        <Header />
        <SectionComponent type="intro" />
      </WaveLayoutBottom>
      <SectionComponent type="integration" />
      <SectionLayout>
        <FadeSection>
          <SectionComponent type="feature" />
        </FadeSection>
      </SectionLayout>
      <CompComponent />
      <SectionComponent type="install" />
      <FooterComponent />
      <CopyrightCcomponent />
    </>
  )
}
export default Index
