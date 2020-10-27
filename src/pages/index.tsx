import React from "react"
import Header from "../components/header"
import FeatureCard from "../components/featureCard"
import Layout from "../components/layout"
import InstallCard from "../components/installCard"

const item: Array<string> = ["Documentation", "Commnutiy", "GitHub", "Brand"]
const content: { title: string; subtitle?: string; desc: string } = {
  title: "DataPrep",
  subtitle: "The fastest way to do data preparation in python",
  desc:
    "DataPrep aims to provide the fastest and the easiest way for data scientists to prepare data in a few lines of code.",
}

const lorem: { title?: string; subtitle?: string; desc: string } = {
  subtitle: "lorem lorem",
  desc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur delectus blanditiis, eveniet vero tenetur aliquid quos! Harum cupiditate iure ipsam omnis veniam quasi, nesciunt aspernatur saepe quis incidunt repudiandae!",
}

const Index: React.FC = () => (
  <>
    <Header link={item} />
    <Layout>
      <FeatureCard
        title={content.title}
        subtitle={content.subtitle}
        desc={content.desc}
      />
      <InstallCard
        title="Get started instantly"
        command="pip install -U dataprep"
        desc="And then check out documentation and examples!"
      />
      <FeatureCard subtitle={lorem.subtitle} desc={lorem.desc} />
      <FeatureCard subtitle={lorem.subtitle} desc={lorem.desc} />
      <FeatureCard subtitle={lorem.subtitle} desc={lorem.desc} />
      <FeatureCard subtitle={lorem.subtitle} desc={lorem.desc} />
    </Layout>
  </>
)
export default Index
