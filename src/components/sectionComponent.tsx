import React from "react"
import style from "../styles/SectionComponent.module.sass"
import LogoSnippet from "../components/logoSnippetComponent"
import OpensourceSnippet from "../components/opensourceSnippetComponent"
import IntegrationSnippet from "../components/integrationSnippetComponent"
import CodeSnippet from "../components/codeSnippetComponent"

type SectionProp<T> = {
  type: "intro" | "feature" | "install" | "quote"
  data?: T
}

const SectionComponent: React.FC<SectionProp<any>> = ({ type, data }) => {
  if (type === "intro") {
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
  } else if (type === "feature") {
    let snippet
    if (data.correspondingComponent === "logoSnippetComponent") {
      snippet = <LogoSnippet />
    } else if (data.correspondingComponent === "opensourceSnippetComponent") {
      snippet = <OpensourceSnippet />
    } else if (data.correspondingComponent === "integrationSnippetComponent") {
      snippet = <IntegrationSnippet />
    } else if (data.correspondingComponent === "codeSnippetComponent") {
      snippet = <CodeSnippet />
    }

    return (
      <section className={style.featureContainer}>
        <div className={style.featureTexts}>
          {data.featureTitle && <h1>{data.featureTitle}</h1>}
          <h2>{data.featureSubtitle}</h2>
          <p>{data.featureDesc}</p>
        </div>
        <div className={style.featureSnippets}>{snippet}</div>
      </section>
    )
  } else if (type === "install") {
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
  } else if (type === "quote") {
    return (
      <section className={style.quoteContainer}>
        <div className={style.quoteTexts}>
          <h3>
            “We were disappointed, if not surprised, to see that data wrangling
            still takes the <strong>lion’s share of time</strong> in a typical
            data professional’s day. Data preparation and cleansing takes
            <strong> real data science</strong> work and has a negative impact
            on overall job satisfaction.”{" "}
          </h3>
          <h4>
            {" "}
            2020 State of Data Science: Moving From Hype Toward Maturity,
            Anaconda{" "}
          </h4>
        </div>
      </section>
    )
  } else {
    return null
  }
}

export default SectionComponent
