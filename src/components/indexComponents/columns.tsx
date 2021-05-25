import React, { useEffect, useState } from "react"
import style from "../../styles/columns.module.sass"
import { getReleaseVer, IResponse } from "../../adapters/xhr"

type NewsProp = {
  isLoading: boolean
  data: Array<IResponse>
}

const News: React.FC<NewsProp> = ({ isLoading, data }) => {
  if (!isLoading) {
    if (!data || data.length === 0) {
      return <p>No data found</p>
    } else {
      return (
        <ul>
          {data.slice(0, 4).map(item => (
            <li key={item.id}>
              {item.published_at.split("T")[0]}: DataPrep{" "}
              <a href={item.html_url} target="_blank" rel="noreferrer">
                {item.tag_name}
              </a>{" "}
              is released.
            </li>
          ))}
        </ul>
      )
    }
  }
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
        and verify fixes.
      </li>
      <li>
        Review the{" "}
        <a
          href="https://github.com/sfu-db/dataprep/commits/develop"
          target="_blank"
          rel="noreferrer"
        >
          source code and changes
        </a>
        .
      </li>
      <li>Engage with other DataPrep users and developers on StackOverflow.</li>
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
      <li>Provide use cases and write down your user experience.</li>
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
      <li>
        Install the{" "}
        <a
          href="https://github.com/sfu-db/dataprep/releases/latest"
          target="_blank"
          rel="noreferrer"
        >
          latest release.
        </a>
      </li>
      <li>
        Read the{" "}
        <a
          href="https://sfu-db.github.io/dataprep/user_guide/user_guide.html"
          target="_blank"
          rel="noreferrer"
        >
          user guide.
        </a>
      </li>
      <li>
        Watch the{" "}
        <a
          href="https://www.youtube.com/channel/UC7OpZsQwWcmuD0SUaOjGBMA/videos"
          target="_blank"
          rel="noreferrer"
        >
          tutorials.
        </a>
      </li>
      <li>
        Checkout the{" "}
        <a
          href="https://github.com/sfu-db/dataprep#examples--usages"
          target="_blank"
          rel="noreferrer"
        >
          examples.
        </a>
      </li>
    </ul>
  </div>
)

const Event: React.FC = () => (
  <div>
    <ul>
      <li>
        <a
          href="https://global.pydata.org/talks/340"
          target="_blank"
          rel="noreferrer"
        >
          Short Talk at PyData 2020
        </a>
      </li>
      <li>
        <a href="https://lu.ma/31m0imch" target="_blank" rel="noreferrer">
          SFU Surge Data Prep Open Workshop
        </a>
      </li>
    </ul>
  </div>
)

const Columns: React.FC = () => {
  const [{ isLoading, data }, setReleaseData] = useState<NewsProp>({
    isLoading: true,
    data: [],
  })

  useEffect(() => {
    getReleaseVer()
      .then(fetched => {
        setReleaseData({
          isLoading: false,
          data: fetched,
        })
      })
      .catch(error => {
        console.log(error)
        setReleaseData({
          isLoading: false,
          data: [],
        })
      })
  }, [])

  return (
    <section className={style.footerContainer}>
      <div className={style.compDiv}>
        <h3>News</h3>
        <News isLoading={isLoading} data={data} />
      </div>
      <div className={style.compDiv}>
        <h3>Contribution</h3>
        <Contribution />
      </div>
      <div className={style.compDiv}>
        <h3>Getting Started</h3>
        <GS />
      </div>
      <div className={style.compDiv}>
        <h3>Events</h3>
        <Event />
      </div>
    </section>
  )
}

export default Columns
