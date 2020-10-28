import React from "react"
import Header from "../components/header"
import FeatureCard from "../components/featureCard"
import Layout from "../components/layout"
import InstallCard from "../components/installCard"
import { useStaticQuery, graphql } from "gatsby"

interface FeatureDataItem {
  subtitle: string
  description: string
  snippet: string | null
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
    }
  `)
  const introData = data.allIntroItemsJson.nodes[0] // We only have one intro section
  const featureData = data.allFeatureItemsJson.nodes
  const navbarData = data.allNavbarItemsJson.nodes
  return (
    <>
      <Header linkArray={navbarData} />
      <Layout>
        <FeatureCard
          title={introData.title}
          subtitle={introData.subtitle}
          desc={introData.description}
        />
        <InstallCard
          title="Get started instantly"
          command="pip install -U dataprep"
          desc="And then check out documentation and examples!"
        />
        {featureData.map((item: FeatureDataItem) => (
          <FeatureCard
            key={item.id}
            subtitle={item.subtitle}
            desc={item.description}
          />
        ))}
      </Layout>
    </>
  )
}
export default Index
