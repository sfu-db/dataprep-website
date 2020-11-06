import React from "react"
import Header from "../components/header"
import WaveLayoutBottom from "../components/waveLayoutBottom"
import { useStaticQuery, graphql } from "gatsby"
import FooterComponent from "../components/footerComponent"
import FadeSection from "../components/fadeSection"
import FooterLayout from "../components/footerLayout"
import CopyrightCcomponent from "../components/copyrightComponent"
import SectionComponent from "../components/sectionComponent"
import CompComponent from "../components/compComponent"
import SectionLayout from "../components/sectionLayout"

interface IFeatureDataItem {
  featureTitle?: string
  featureSubtitle: string
  featureDesc: string
  featureSnippet: string | null
  id: string
}

interface IFooterDataItem {
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
      allNavbarItemsJson {
        nodes {
          id
          text
          link
        }
      }
      allFooterItemsJson {
        nodes {
          description
          title
          content
          id
        }
      }
    }
  `)

  return (
    <>
      <WaveLayoutBottom>
        <Header linkArray={data.allNavbarItemsJson.nodes} />
        <SectionComponent type="intro" />
      </WaveLayoutBottom>
      <SectionComponent type="quote" />
      <SectionLayout>
        {data.allFeatureItemsJson.nodes.map((item: IFeatureDataItem) => (
          <FadeSection key={item.id}>
            <SectionComponent type="feature" data={item} />
          </FadeSection>
        ))}
      </SectionLayout>
      <CompComponent />
      <SectionComponent type="install" />
      <FooterLayout>
        {data.allFooterItemsJson.nodes.map((item: IFooterDataItem) => (
          <FooterComponent
            key={item.id}
            title={item.title}
            desc={item.description}
            content={item.content}
          />
        ))}
      </FooterLayout>
      <CopyrightCcomponent />
    </>
  )
}
export default Index
