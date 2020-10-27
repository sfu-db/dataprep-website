import React from "react"
import Header from "../components/header"
import FeatureCard from "../components/featureCard"
import Layout from "../components/layout"

const item: Array<string> = ["Documentation", "Commnutiy", "GitHub", "Brand"]
const content: { title: string; subtitle?: string; desc: string } = {
  title: "DataPrep",
  subtitle: "The fastest way to do data preparation in python",
  desc:
    "DataPrep aims to provide the fastest and the easiest way for data scientists to prepare data in a few lines of code.",
}

const Index: React.FC = () => (
  <>
    <Header link={item} />
    <Layout>
      <FeatureCard
        title={content.title}
        subtitle={content.subtitle}
        desc={content.desc} />
    </Layout>
  </>
)
export default Index
