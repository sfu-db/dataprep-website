import React, { useEffect, useState } from "react"
import style from "../styles/footer.module.sass"

const NewsList: React.FC = ({ data }) => {
  console.log(data)
  if (!data || data.length === 0) return <p>No data found</p>
  return (
    <ul>
      {data.slice(0, 10).map(item => {
        return (
          <li key={item.id}>
            {item.published_at.split("T")[0]}: DataPrep{" "}
            <a href={item.html_url} target="_blank" rel="noreferrer">
              {item.tag_name}
            </a>{" "}
            is released.
          </li>
        )
      })}
    </ul>
  )
}

const News = ({ isLoading, ...prop }) => {
  if (!isLoading) return <NewsList {...prop} />
  return <p>Fetching data...</p>
}

const Contribution: React.FC = () => (
  <div>
    <h4>There are many ways to contribute to DataPrep:</h4>
    <ul>
      <li>
        <a
          href="https://github.com/sfu-db/dataprep/issues"
          target="_blank"
          rel="noreferrer"
        >
          Submit bugs
        </a>{" "}
        and help us verify fixes as they are checked in.
      </li>
      <li>
        Review the{" "}
        <a
          href="https://github.com/sfu-db/dataprep/commits/develop"
          target="_blank"
          rel="noreferrer"
        >
          souorce code and changes
        </a>
        .
      </li>
      <li>Engage with other DataPrep users and develops on StackOverflow.</li>
      <li>
        Help each other in the{" "}
        <a href="https://discord.gg/xwbkFNk" target="_blank" rel="noreferrer">
          DataPrep Community Discord
        </a>{" "}
        and{" "}
        <a
          href="https://groups.google.com/forum/#!forum/dataprep"
          target="_blank"
          rel="noreferrer"
        >
          Mail list & Forum
        </a>
        .
      </li>
      <li>Provide use cases and writing down your user experience.</li>
      <li>
        Please take a look at our{" "}
        <a
          href="https://github.com/sfu-db/dataprep/wiki"
          target="_blank"
          rel="noreferrer"
        >
          wiki
        </a>{" "}
        for development documentations!
      </li>
    </ul>
  </div>
)

const GS: React.FC = () => (
  <div>
    <h4>
      Learning DataPrep is easy whether you are a data scientist or a beginner
      in Python:
    </h4>
    <ul>
      <li>Install the latest release.</li>
      <li>Read the user guide.</li>
      <li>Watch the tutorials.</li>
      <li>Checkout the examples.</li>
    </ul>
  </div>
)

const FooterComponent: React.FC = () => {
  const [releaseData, setReleaseData] = useState({
    loading: false,
    data: null,
  })
  useEffect(() => {
    setReleaseData({ loading: true, data: null })
    fetch("https://api.github.com/repos/sfu-db/dataprep/releases")
      .then(res => res.json())
      .then(jsonData => {
        setReleaseData({ loading: false, data: jsonData })
      })
  }, [setReleaseData])
  return (
    <section className={style.footerContainer}>
      <div className={style.compDiv}>
        <h3>News</h3>
        <News isLoading={releaseData.loading} data={releaseData.data} />
      </div>
      <div className={style.compDiv}>
        <h3>Contribution</h3>
        <Contribution />
      </div>
      <div className={style.compDiv}>
        <h3>Getting Started</h3>
        <GS />
      </div>
    </section>
  )
}

export default FooterComponent
