import React from "react"
import Header from "../components/header"
import WaveLayoutBottom from "../components/waveLayoutBottom"
import FooterComponent from "../components/footerComponent"
import CopyrightCcomponent from "../components/copyrightComponent"
import SectionComponent from "../components/sectionComponent"
import CompComponent from "../components/compComponent"
import SectionLayout from "../components/sectionLayout"
import FadeSection from "../components/fadeSection"
import SEO from "../components/seo"

const Index: React.FC = () => {
  return (
    <>
      <SEO />
      <WaveLayoutBottom>
        <Header />
        <FadeSection>
          <SectionComponent type="intro" />
        </FadeSection>
      </WaveLayoutBottom>
      <FadeSection>
        <SectionComponent type="integration" />
      </FadeSection>
      <SectionLayout>
        <FadeSection>
          <SectionComponent type="feature" />
        </FadeSection>
      </SectionLayout>
      <FadeSection>
        <CompComponent />
      </FadeSection>
      <FadeSection>
        <SectionComponent type="install" />
      </FadeSection>
      <FooterComponent />
      <CopyrightCcomponent />
    </>
  )
}
export default Index
