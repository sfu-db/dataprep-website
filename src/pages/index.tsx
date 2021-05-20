import React from "react"
import Header from "../components/header"
import WaveLayoutBottom from "../components/indexComponents/waveLayoutBottom"
import Columns from "../components/indexComponents/columns"
import Copyright from "../components/copyright"
import Sections from "../components/indexComponents/sections"
import Components from "../components/indexComponents/components"
import SectionLayout from "../components/indexComponents/sectionLayout"
import FadeSection from "../components/indexComponents/fadeSection"
import SEO from "../components/seo"
import Banner from "../components/indexComponents/banner"

const Index: React.FC = () => {
  return (
    <>
      <SEO />
      <WaveLayoutBottom>
        <Header />
        <Banner />
        <FadeSection>
          <Sections type="intro" />
        </FadeSection>
      </WaveLayoutBottom>
      <FadeSection>
        <Sections type="quotes" />
        <Sections type="integration" />
      </FadeSection>
      <SectionLayout>
        <FadeSection>
          <Sections type="feature" />
        </FadeSection>
      </SectionLayout>
      <FadeSection>
        <Components />
      </FadeSection>
      <FadeSection>
        <Sections type="install" />
      </FadeSection>
      <Columns />
      <Copyright />
    </>
  )
}
export default Index
