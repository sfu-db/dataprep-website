import React from "react"
import style from "../../styles/sections.module.sass"
import {
  LogoSnippet,
  OpensourceSnippet,
  IntegrationSnippet,
  ChartSnippet,
  TerminalSnippetPrimary,
  TerminalSnippetSecondary,
  EdaFrame,
  ConnectorFrame,
  CleanFrame,
  EdaCode,
  ConnectorCode,
  CleanCode,
} from "./snippets"
import plot from "../../statics/plot.html"

type SectionProp = {
  type: "intro" | "feature" | "install" | "integration" | "quotes"
}

type FeatureCardProp = {
  title: string
  content: string
  snippetComponent: React.ReactNode
  leftToRight: boolean
}

type IntegrationCardProp = {
  title: string
  content: string
  snippetComponent: React.ReactNode
}

const Intro: React.FC = () => {
  return (
    <section className={style.introContainer}>
      <div className={style.introTexts}>
        <h1>The easiest way to prepare data in Python</h1>
      </div>
      <div className={style.introSnippets}>
        <div>
          <TerminalSnippetPrimary />
        </div>
        <div className={style.introSnippetDeviation}>
          <TerminalSnippetSecondary />
        </div>
      </div>
    </section>
  )
}

const Quotes: React.FC = () => (
  <div className={style.quotesContainer}>
    <h1>Think different.</h1>
    <div>
      <p className={style.quotesText}>
        &quot;We were disappointed, if not surprised, to see that data wrangling
        still takes the <strong>lion’s share of time</strong> in a typical data
        professional’s day. Data preparation and cleansing takes{" "}
        <strong>valuable time</strong> away from{" "}
        <strong>real data science</strong> work and has a negative impact on
        overall job satisfaction.&quot;
      </p>
      <p className={style.quotesSource}>
        2020 State of Data Science: Moving From Hype Toward Maturity, Anaconda
      </p>
    </div>
  </div>
)

const IntegrationCard: React.FC<IntegrationCardProp> = ({
  title,
  content,
  snippetComponent,
}) => {
  return (
    <div className={style.integrationPart}>
      <div className={style.integrationSnippets}>{snippetComponent}</div>
      <div className={style.integrationTexts}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

const Integration: React.FC = () => {
  return (
    <section className={style.integrationContainer}>
      <IntegrationCard
        title="Designed for Notebook Users"
        content="DataPrep is designed for computational notebooks, the most popular environment among data scientists."
        snippetComponent={<LogoSnippet />}
      />
      <IntegrationCard
        title="Integrate Seamlessly with the Python Ecosystem"
        content="DataPrep is built using Pandas/Dask DataFrame and can be seamlessly integrated with other Python libraries."
        snippetComponent={<IntegrationSnippet />}
      />
      <IntegrationCard
        title="Embrace Open Source"
        content="DataPrep is free, open-source software released under the MIT
        license. Anyone can reuse DataPrep code for any purpose."
        snippetComponent={<OpensourceSnippet />}
      />
    </section>
  )
}

const FeatureCard: React.FC<FeatureCardProp> = ({
  title,
  content,
  snippetComponent,
  leftToRight,
}) => {
  return (
    <div className={style.featurePart}>
      {leftToRight ? (
        <>
          <div className={style.featureTexts}>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
          <div className={style.featureSnippets}>{snippetComponent}</div>
        </>
      ) : (
        <>
          <div className={style.featureSnippets}>{snippetComponent}</div>
          <div className={style.featureTexts}>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </>
      )}
    </div>
  )
}

const Feature: React.FC = () => {
  return (
    <section className={style.featureContainer}>
      <FeatureCard
        title="Why?"
        content="According to the 2020 State of Data Science survey by
            Anaconda, data preparation still takes the majority of time in a
            typical data professional’s day. To solve this issue in the next
            decade, we have to THINK DIFFERENT."
        snippetComponent={<ChartSnippet />}
        leftToRight={true}
      />
      <FeatureCard
        title="DataPrep.Connector"
        content="DataPrep.Connector is an intuitive, open-source API wrapper that
          speeds up development by standardizing calls to multiple APIs as a
          simple workflow. Streamline calls to multiple APIs through one
          intuitive library."
        snippetComponent={<ConnectorFrame codes={<ConnectorCode />} />}
        leftToRight={false}
      />
      <FeatureCard
        title="DataPrep.EDA"
        content="DataPrep.EDA is the fastest and the easiest EDA tool in Python. It
        allows data scientists to understand a Pandas/Dask DataFrame with a
        few lines of code in seconds."
        snippetComponent={<EdaFrame codes={<EdaCode />} element={plot} />}
        leftToRight={true}
      />
      <FeatureCard
        title="DataPrep.Clean"
        content="DataPrep.Clean aims to provide a large number of functions with a
        unified interface for cleaning and standardizing data of various
        semantic types in a Pandas or Dask DataFrame."
        snippetComponent={<CleanFrame codes={<CleanCode />} />}
        leftToRight={false}
      />
    </section>
  )
}

const Installation: React.FC = () => {
  return (
    <section className={style.installContainer} id="install">
      <div className={style.installTexts}>
        <h1>Get started instantly</h1>
        <p>
          <span>pip install -U dataprep</span>
        </p>
        <h3>
          And then check out{" "}
          <a
            href="https://sfu-db.github.io/dataprep/index.html"
            target="_blank"
            rel="noreferrer"
          >
            documentation
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/sfu-db/dataprep#examples--usages"
            target="_blank"
            rel="noreferrer"
          >
            examples
          </a>
          !
        </h3>
      </div>
    </section>
  )
}

const Sections: React.FC<SectionProp> = ({ type }) => {
  let toRender

  if (type === "intro") {
    toRender = <Intro />
  } else if (type === "feature") {
    toRender = <Feature />
  } else if (type === "install") {
    toRender = <Installation />
  } else if (type === "integration") {
    toRender = <Integration />
  } else if (type === "quotes") {
    toRender = <Quotes />
  }

  return toRender as React.ReactElement
}

export default Sections
