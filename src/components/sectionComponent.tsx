import React from "react"
import style from "../styles/SectionComponent.module.sass"
import {
  LogoSnippet,
  OpensourceSnippet,
  IntegrationSnippet,
  CodeSnippet,
} from "../components/snippetComponent"

type SectionProp = {
  type: "intro" | "feature" | "install" | "quote"
  data?: FeatureProp
}

type FeatureProp = {
  correspondingComponent: string
  featureTitle: string
  featureSubtitle: string
  featureDesc: string
}

const Intro: React.FC = () => {
  return (
    <section className={style.introContainer}>
      <div className={style.introTexts}>
        <h1>
          <span>DataPrep.</span>
          <br />
          <span style={{ color: "#e30613" }}>
            The fastest way to do data preparation in Python
          </span>
        </h1>
        <p>
          DataPrep aims to provide the fastest and the easiest way for data
          scientists to prepare data in a few lines of code.
        </p>
      </div>
    </section>
  )
}

const Feature: React.FC<FeatureProp> = ({
  correspondingComponent,
  featureTitle,
  featureSubtitle,
  featureDesc,
}) => {
  let snippet: React.ReactNode
  if (correspondingComponent === "logoSnippetComponent") {
    snippet = <LogoSnippet />
  } else if (correspondingComponent === "opensourceSnippetComponent") {
    snippet = <OpensourceSnippet />
  } else if (correspondingComponent === "integrationSnippetComponent") {
    snippet = <IntegrationSnippet />
  } else if (correspondingComponent === "codeSnippetComponent") {
    snippet = <CodeSnippet />
  }
  return (
    <section className={style.featureContainer}>
      <div className={style.featureTexts}>
        {featureTitle && <h1>{featureTitle}</h1>}
        <h2>{featureSubtitle}</h2>
        <p>{featureDesc}</p>
      </div>
      <div className={style.featureSnippets}>{snippet}</div>
    </section>
  )
}

const Installation: React.FC = () => {
  return (
    <section className={style.installContainer}>
      <div className={style.installTexts}>
        <h1>Get started instantly</h1>
        <h2>
          <span>pip install -U dataprep</span>
        </h2>
        <p>And then check out documentation and examples!</p>
      </div>
    </section>
  )
}

const Quote: React.FC = () => {
  return (
    <section className={style.quoteContainer}>
      <div className={style.quoteTexts}>
        <h3>
          “We were disappointed, if not surprised, to see that data wrangling
          still takes the <strong>lion’s share of time</strong> in a typical
          data professional’s day. Data preparation and cleansing takes
          <strong> real data science</strong> work and has a negative impact on
          overall job satisfaction.”{" "}
        </h3>
        <h4>
          {" "}
          2020 State of Data Science: Moving From Hype Toward Maturity, Anaconda{" "}
        </h4>
      </div>
    </section>
  )
}

const SectionComponent: React.FC<SectionProp> = ({ type, data }) => {
  let toRender

  if (type === "intro") {
    toRender = <Intro />
  } else if (type === "feature" && data) {
    toRender = (
      <Feature
        correspondingComponent={data.correspondingComponent}
        featureTitle={data.featureTitle}
        featureSubtitle={data.featureSubtitle}
        featureDesc={data.featureDesc}
      />
    )
  } else if (type === "install") {
    toRender = <Installation />
  } else if (type === "quote") {
    toRender = <Quote />
  }

  return toRender as React.ReactElement
}

export default SectionComponent
