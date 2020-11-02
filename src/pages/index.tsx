import React from "react"
import Header from "../components/header"
import FeatureCard from "../components/featureCard"
import Layout from "../components/layout"
import TopSectionLayout from "../components/topSectionLayout"
import BottomSectionLayout from "../components/bottomSectionLayout"
import InstallCard from "../components/installCard"
import { useStaticQuery, graphql } from "gatsby"
import FooterCard from "../components/footerCard"
import FadeSection from "../components/fadeSection"

interface FeatureDataItem {
  subtitle: string
  description: string
  snippet: string | null
  id: string
}

interface FooterDataItem {
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
          description
          subtitle
          id
        }
      }
      allIntroItemsJson {
        nodes {
          description
          snippet
          subtitle
          title
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
  const introData = data.allIntroItemsJson.nodes[0] // We only have one intro section
  const featureData = data.allFeatureItemsJson.nodes
  const navbarData = data.allNavbarItemsJson.nodes
  const footerData = data.allFooterItemsJson.nodes
  return (
    <Layout>
      <TopSectionLayout>
        <Header linkArray={navbarData} />
        <FeatureCard
          title={introData.title}
          subtitle={introData.subtitle}
          desc={introData.description}
        />
      </TopSectionLayout>
      <InstallCard
        title="Get started instantly"
        command="pip install -U dataprep"
        desc="And then check out documentation and examples!"
      />
      <BottomSectionLayout>
        {featureData.map((item: FeatureDataItem) => (
          <FadeSection key={item.id}>
            <FeatureCard
              key={item.id}
              subtitle={item.subtitle}
              desc={item.description}
            />
          </FadeSection>
        ))}
      </BottomSectionLayout>
      <div
        className="footerCardContainer"
        style={{
          display: `flex`,
          justifyContent: `space-around`,
          alignItems: `baseline`,
        }}
      >
        {footerData.map((item: FooterDataItem) => (
          <FooterCard
            key={item.id}
            title={item.title}
            desc={item.description}
            content={item.content}
          />
        ))}
      </div>
    </Layout>
  )
}
export default Index
