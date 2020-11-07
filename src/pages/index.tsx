import React from "react"
import Header from "../components/header"
import WaveLayoutBottom from "../components/waveLayoutBottom"
import { useStaticQuery, graphql } from "gatsby"
import FooterComponent from "../components/footerComponent"
import FadeSection from "../components/fadeSection"
import CopyrightCcomponent from "../components/copyrightComponent"
import SectionComponent from "../components/sectionComponent"
import CompComponent from "../components/compComponent"
import SectionLayout from "../components/sectionLayout"
import { Helmet } from "react-helmet"

type FeatureDataItem = {
  featureTitle?: string
  featureSubtitle: string
  featureDesc: string
  correspondingComponent: string
  id?: string
}

type FooterDataItem = {
  title: string
  description: string
  content: Array<string>
  id: string
}

const Index: React.FC = () => {
  const data = useStaticQuery(graphql`
    query DataItemsQuery {
      allFeatureItemsJson {
        nodes {
          featureTitle
          featureSubtitle
          featureDesc
          correspondingComponent
          id
        }
      }
    }
  `)

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
      <SectionComponent type="quote" />
      <SectionLayout>
        {data.allFeatureItemsJson.nodes.map((item: FeatureDataItem) => (
          <FadeSection key={item.id}>
            <SectionComponent type="feature" data={item} />
          </FadeSection>
        ))}
      </SectionLayout>
      <CompComponent />
      <SectionComponent type="install" />
      <FooterComponent />
      <CopyrightCcomponent />
    </>
  )
}
export default Index
