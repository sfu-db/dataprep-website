/* eslint-disable react/no-unescaped-entities */
import React from "react"
import graph from "../images/integration.svg"
import logoSnippet from "../images/logoSnippet.svg"
import chart from "../images/chart.svg"
import github from "../images/github.svg"
import style from "../styles/snippetComponent.module.sass"

interface ICountryTableData {
  head: string[]
  body: {
    [index: string]: string[]
  }
}

const countryTableData: ICountryTableData = {
  head: ["", "country", "country_clean"],
  body: {
    "0": ["USA", "United States"],
    "1": ["country: Canada", "Canada"],
    "2": ["France", "France"],
    "3": ["233", "Estonia"],
    "4": ["tr", "Turkey"],
  },
}

export const ChartSnippet: React.FC = () => {
  return (
    <div>
      <img src={chart} alt="Why DataPrep Chart" id="chart-snippet" />
    </div>
  )
}

export const IntegrationSnippet: React.FC = () => {
  return (
    <div>
      <img src={graph} alt="Integration" id="integration-snippet" />
    </div>
  )
}

export const LogoSnippet: React.FC = () => {
  return (
    <div className="snippet-img">
      <img src={logoSnippet} alt="Logo Snippet" id="logo-snippet" />
    </div>
  )
}

export const OpensourceSnippet: React.FC = () => {
  return (
    <div
      style={{
        paddingTop: "2em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexFlow: "column nowrap",
        height: "12em",
      }}
    >
      <div className="snippet-img">
        <img src={github} alt="GitHub Icon" id="opensource-snippet" />
      </div>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=sfu-db&repo=dataprep&type=star&count=true&size=small"
        frameBorder="0"
        scrolling="0"
        width="89"
        height="20"
        title="GitHub"
      ></iframe>
    </div>
  )
}

export const TerminalSnippetPrimary: React.FC = () => {
  return (
    <div className={style.terminalContainer}>
      <div className={style.terminalTitleBar}>
        <div className={style.terminalBtns}>
          <span
            className={`${style.terminalBtn} ${style.terminalBtnRed}`}
          ></span>
          <span
            className={`${style.terminalBtn} ${style.terminalBtnGreen}`}
          ></span>
          <span
            className={`${style.terminalBtn} ${style.terminalBtnYellow}`}
          ></span>
        </div>
        <div className={style.terminalTitleContent}>dataprep_eda.py</div>
        <div className={style.terminalTitlePlacehodler}></div>
      </div>
      <div className={style.terminalDocumentContent}>
        <ol className={style.terminalCommand}>
          <li>
            <span className={style.declareSyntax}>from</span>{" "}
            <span className={style.packageSyntax}>dataprep.connector</span>{" "}
            <span className={style.declareSyntax}>import</span> connector
          </li>
          <li>
            <span className={style.declareSyntax}>from</span>{" "}
            <span className={style.packageSyntax}>dataprep.eda</span>{" "}
            <span className={style.declareSyntax}>import</span> plot
          </li>
          <li></li>
          <li>
            dc = connector(<span className={style.paramSyntax}>"dblp"</span>)
          </li>
          <li>
            df = dc.query(
            <span className={style.paramSyntax}>"publication"</span>, q=
            <span className={style.paramSyntax}>"CVPR 2020"</span>, _count=
            <span className={style.declareSyntax}>2000</span>)
          </li>
          <li>
            plot(df, <span className={style.paramSyntax}>"title"</span>)
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>
  )
}

export const TerminalSnippetSecondary: React.FC = () => {
  return (
    <div className={style.terminalContainer}>
      <div className={style.terminalTitleBar}>
        <div className={style.terminalBtns}>
          <span
            className={`${style.terminalBtn} ${style.terminalBtnRed}`}
          ></span>
          <span
            className={`${style.terminalBtn} ${style.terminalBtnGreen}`}
          ></span>
          <span
            className={`${style.terminalBtn} ${style.terminalBtnYellow}`}
          ></span>
        </div>
        <div className={style.terminalTitleContent}>dataprep_connector.py</div>
        <div className={style.terminalTitlePlacehodler}></div>
      </div>
      <div className={style.terminalDocumentContent}>
        <ol className={style.terminalCommand}>
          <li>
            <span className={style.declareSyntax}>from</span>{" "}
            <span className={style.packageSyntax}>dataprep.connector</span>{" "}
            <span className={style.declareSyntax}>import</span> connector
          </li>
          <li></li>
          <li>
            auth_token ={" "}
            <span className={style.paramSyntax}>
              "{"<"}your_access_token{">"}"
            </span>
          </li>
          <li>
            dc = connector(<span className={style.paramSyntax}>"youtube"</span>,
            _auth={"{"}
            <span className={style.paramSyntax}>"access_token"</span>:
            auth_token
            {"}"})
          </li>
          <li></li>
          <li>
            df = dc.query(<span className={style.paramSyntax}>"videos"</span>,
            q=
            <span className={style.paramSyntax}>"Data Science"</span>, part=
            <span className={style.paramSyntax}>"snippet"</span>,{" "}
            <span className={style.declareSyntax}>type</span>=
            <span className={style.paramSyntax}>"videos"</span>, _count=
            <span className={style.declareSyntax}>40</span>)
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>
  )
}

export const EdaFrame: React.FC<{
  codes: React.ReactNode
  element: string
}> = ({ codes, element }) => {
  return (
    <div className={style.edaSnippetContainer}>
      {codes}
      <iframe
        srcDoc={element}
        frameBorder="0"
        loading="lazy"
        scrolling="0"
        width="490"
        height="443"
      ></iframe>
    </div>
  )
}

export const ConnectorFrame: React.FC<{ codes: React.ReactNode }> = ({
  codes,
}) => (
  <div className={style.connectorSnippetContainer}>
    {codes}
    <div className={style.connectorTable}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>authors</th>
            <th>title</th>
            <th>venue</th>
            <th>pages</th>
            <th>publish year</th>
            <th>publication type</th>
            <th>publication url</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>[Heon-Cheol Lee...</td>
            <td>Comparison and analy...</td>
            <td>[URAI]</td>
            <td>165-168</td>
            <td>2011</td>
            <td>Conference and Work...</td>
            <td>https://dblp.org/rec/..</td>
          </tr>
          <tr>
            <td>1</td>
            <td>[Dong-Uk Lee...</td>
            <td>22.3 A 123Gb 0-High...</td>
            <td>[ISSCC]</td>
            <td>334-336</td>
            <td>2020</td>
            <td>Conference and Work...</td>
            <td>https://dblp.org/rec/..</td>
          </tr>
          <tr>
            <td>2</td>
            <td>[Hyun-Woo Lee...</td>
            <td>A 1.6V 3.3Gb/s GDDR...</td>
            <td>[ISSCC]</td>
            <td>140-141</td>
            <td>2009</td>
            <td>Conference and Work...</td>
            <td>https://dblp.org/rec/..</td>
          </tr>
          <tr>
            <td>3</td>
            <td>[Young-Ju Kim...</td>
            <td>A 16Gb 18Gb/S/pin...</td>
            <td>[ISSCC]</td>
            <td>204-206</td>
            <td>2018</td>
            <td>Conference and Work...</td>
            <td>https://dblp.org/rec/..</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export const CleanFrame: React.FC<{ codes: React.ReactNode }> = ({ codes }) => (
  <div className={style.cleanSnippetContainer}>
    {codes}
    <div className={style.cleanOutput}>
      <div className={style.cleanDesc}>
        <ul>
          <li>Country Cleaning Report: </li>
          <li style={{ textIndent: "5em" }}>5 values cleaned (100.0%)</li>
          <li>
            Result contains 5 (100.0%) values in the correct format and 0 null
            values (0.0%)
          </li>
        </ul>
      </div>
      <div className={style.cleanTable}>
        <table>
          <thead>
            {countryTableData.head.map((item: number | string, id: number) => (
              <th key={id}>{item}</th>
            ))}
          </thead>
          <tbody>
            {Object.keys(countryTableData.body).map(
              (row: string, id: number) => {
                const data = countryTableData.body[row]
                return (
                  <tr key={id}>
                    <td>{row}</td>
                    <td>{data[0]}</td>
                    <td>{data[1]}</td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export const ConnectorCode: React.FC = () => (
  <div className={style.codeArea}>
    <ol>
      <li>
        <span className={style.declareSyntax}>from</span>{" "}
        <span className={style.packageSyntax}>dataprep.connector</span>{" "}
        <span className={style.declareSyntax}>import</span> connector
      </li>
      <li>
        auth_token ={" "}
        <span className={style.paramSyntax}>
          "{"<"}your_access_token{">"}"
        </span>
      </li>
      <li>
        dc = connector(
        <span className={style.paramSyntax}>"./DataConnectorConfigs/DBLP"</span>
        )
      </li>
      <li>
        df = dc.query(<span className={style.paramSyntax}>"publication"</span>,{" "}
        q=<span className={style.paramSyntax}>"lee"</span>
      </li>
    </ol>
  </div>
)

export const EdaCode: React.FC = () => (
  <div className={style.codeArea}>
    <ol>
      <li>
        <span className={style.declareSyntax}>import</span>{" "}
        <span className={style.packageSyntax}>pandas</span>{" "}
        <span className={style.declareSyntax}>as</span> pd
      </li>
      <li>
        <span className={style.declareSyntax}>from</span>{" "}
        <span className={style.packageSyntax}>dataprep.eda</span>{" "}
        <span className={style.declareSyntax}>import</span> plot
      </li>
      <li>d = "https://www.openml.org/data/get_csv/1595261/phpMawTba"</li>
      <li>
        df = pd.read_csv(d , na_values=
        <span className={style.paramSyntax}>[' ?']</span>)
      </li>
      <li>plot(df, "age")</li>
    </ol>
  </div>
)

export const CleanCode: React.FC = () => (
  <div className={style.codeArea}>
    <ol>
      <li>
        <span className={style.declareSyntax}>import</span>{" "}
        <span className={style.packageSyntax}>pandas</span>{" "}
        <span className={style.declareSyntax}>as</span> pd
      </li>
      <li>
        <span className={style.declareSyntax}>from</span>{" "}
        <span className={style.packageSyntax}>dataprep.clean</span>{" "}
        <span className={style.declareSyntax}>import</span> clean_country
      </li>
      <li>
        df = pd.DataFrame({"{"}"country":{" "}
        <span className={style.paramSyntax}>
          ["USA", "country: Canada", " France ", "233", " tr "]{"}"}
        </span>
        )
      </li>
      <li>clean_country(df, "country")</li>
    </ol>
  </div>
)
