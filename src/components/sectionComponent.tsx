import React from "react"
import style from "../styles/SectionComponent.module.sass"
import {
  LogoSnippet,
  OpensourceSnippet,
  IntegrationSnippet,
  ChartSnippet,
  TerminalSnippetPrimary,
  TerminalSnippetSecondary,
  NotebookFrame,
} from "../components/snippetComponent"
import FadeSection from "../components/fadeSection"
import plot from "../statics/plot.html"

type SectionProp = {
  type: "intro" | "feature" | "install" | "integration"
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

const Integration: React.FC = () => {
  return (
    <section className={style.integrationContainer}>
      <div className={style.integrationPart}>
        <div className={style.integrationSnippets}>
          <LogoSnippet />
        </div>
        <div className={style.integrationTexts}>
          <h3>Design for Notebook Users</h3>
          <p>
            DataPrep is designed and optimized for computational notebooks, the
            most popular environment among data scientists.
          </p>
        </div>
      </div>
      <div className={style.integrationPart}>
        <div className={style.integrationSnippets}>
          <IntegrationSnippet />
        </div>
        <div className={style.integrationTexts}>
          <h3>Integrate with PyData</h3>
          <p>
            DataPrep is built in Python. It can be seamlessly integrated with
            other Python libraries.
          </p>
        </div>
      </div>
      <div className={style.integrationPart}>
        <div className={style.integrationSnippets}>
          <OpensourceSnippet />
        </div>
        <div className={style.integrationTexts}>
          <h3>Embrace Open Source</h3>
          <p>
            DataPrep is free, open-source software released under the MIT
            license. Anyone can reuse DataPrep code for any purpose.
          </p>
        </div>
      </div>
    </section>
  )
}

const Feature: React.FC = () => {
  return (
    <section className={style.featureContainer}>
      <h2>Why?</h2>
      <FadeSection>
        <div className={style.featurePart}>
          <div className={style.featureTexts}>
            <p>
              According to the 2020 State of Data Science survey conducted by
              Annocada, data preparation still takes the majority of time in a
              typical data professional’s day. To solve this issue in the next
              decade, we have to THINK DIFFERENT.
            </p>
          </div>
          <div className={style.featureSnippets}>
            <ChartSnippet />
          </div>
        </div>
      </FadeSection>
      <FadeSection>
        <div className={style.featurePart}>
          <div className={style.featureSnippets}>
            <TerminalSnippetSecondary />
          </div>
          <div className={style.featureTexts}>
            <h2>DataPrep.Connector</h2>
            <p>
              DataPrep.Connector is an intuitive, open-source API wrapper that
              speeds up development by standardizing calls to multiple APIs as a
              simple workflow. Streamline calls to multiple APIs through one
              intuitive library.
            </p>
          </div>
        </div>
      </FadeSection>
      <FadeSection>
        <div className={style.featurePart}>
          <div className={style.featureTexts}>
            <h2>DataPrep.EDA</h2>
            <p>
              DataPrep.EDA is the fastest and the easiest EDA tool in Python. It
              allows data scientists to understand a Pandas/Dask DataFrame with
              a few lines of code in seconds.
            </p>
          </div>
          <div className={style.featureSnippets}>
            <NotebookFrame element={plot} />
          </div>
        </div>
      </FadeSection>
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
        <h3>And then check out documentation and examples!</h3>
      </div>
    </section>
  )
}

const SectionComponent: React.FC<SectionProp> = ({ type }) => {
  let toRender

  if (type === "intro") {
    toRender = <Intro />
  } else if (type === "feature") {
    toRender = <Feature />
  } else if (type === "install") {
    toRender = <Installation />
  } else if (type === "integration") {
    toRender = <Integration />
  }

  return toRender as React.ReactElement
}

export default SectionComponent
