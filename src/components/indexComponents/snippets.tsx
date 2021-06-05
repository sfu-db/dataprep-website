/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react"
import graph from "../../images/integration.svg"
import logoSnippet from "../../images/logoSnippet.svg"
import chart from "../../images/chart.svg"
import github from "../../images/github.svg"
import style from "../../styles/snippets.module.sass"
import readCsv from "../../adapters/csv"

interface ITableData {
  head: string[]
  body: {
    [index: string]: string[]
  }
}

const countryTableData: ITableData = {
  head: [
    "",
    "CREATED",
    "PHONE",
    "EMAIL",
    "LOCAL ADDRESS",
    "city",
    "LOCAL ADDRESS_clean",
  ],
  body: {
    "0": [
      "04/03/2017",
      "(718) 326-0384",
      "",
      "56-01 NURGE AVE., MASPETH, NY",
      "NEW YORK",
      "56-01 Nurge Ave., Maspeth, NY",
    ],
    "1": [
      "04/03/2017",
      "(516) 223-2010",
      "",
      "228 MILLER AVENUE, FREEPORT, NY",
      "New York",
      "228 Miller Ave., Freeport, NY",
    ],
    "2": [
      "03/01/2021",
      "646-450-7057",
      "davidzuidema@aol.com",
      "1274 49TH STREET SUITE #13G, BROOKLYN, NY",
      "new york",
      "1274 49th St., Suite 13G, Brooklyn, NY",
    ],
    "3": [
      "04/03/2017",
      "(718) 356-3936",
      "",
      "67 EAST FIGUREA AVENUE, STATEN ISLAND, NY",
      "New York",
      "67 E. Figurea Ave., Staten Island, NY",
    ],
    "4": [
      "04/03/2017",
      "(516) 660-1343",
      "tom191@gmail.com",
      "855 E Broadway, Suite 5E, Long Beach, NY",
      "New York",
      "855 E. Broadway, Suite 5E, Long Beach, NY",
    ],
  },
}

const dblpQueryData: ITableData = {
  head: ["", "title", "venue", "publisher", "year", "type", "key", "ee", "..."],
  body: {
    "0": [
      "Zero-Resource Knowledge-Grounded Dialogue Generation.",
      "['NeurIPS']",
      "",
      "2020",
      "Conference and Workshop Papers",
      "conf/nips/LiX0ZZT20",
      "https://proceedings.neurips.cc/paper/2020/hash/609c5e5089a9aa967232aba2a4d03114-Abstract.html",
      "...",
    ],
    "1": [
      "Multi-Fidelity Bayesian Optimization via Deep Neural Networks.",
      "['NeurIPS']",
      "",
      "2020",
      "Conference and Workshop Papers",
      "conf/nips/LiXKZ20",
      "https://proceedings.neurips.cc/paper/2020/hash/60e1deb043af37db5ea4ce9ae8d2c9ea-Abstract.html",
      "...",
    ],
    "2": [
      "Dirichlet Graph Variational Autoencoder.",
      "['NeurIPS']",
      "",
      "2020",
      "Conference and Workshop Papers",
      "conf/nips/LiYLZZR0H20",
      "https://proceedings.neurips.cc/paper/2020/hash/38a77aa456fc813af07bb428f2363c8d-Abstract.html",
      "...",
    ],
    "3": [
      "End-to-End Learning and Intervention in Games.",
      "['NeurIPS']",
      "",
      "2020",
      "Conference and Workshop Papers",
      "conf/nips/LiYNW20",
      "https://proceedings.neurips.cc/paper/2020/hash/c21f4ce780c5c9d774f79841b81fdc6d-Abstract.html",
      "...",
    ],
    "4": [
      "EvolveGraph - Multi-Agent Trajectory Prediction with Dynamic Relational Reasoning.",
      "['NeurIPS']",
      "",
      "2020",
      "Conference and Workshop Papers",
      "conf/nips/LiYTC20",
      "https://proceedings.neurips.cc/paper/2020/hash/e4d8163c7a068b65a64c89bd745ec360-Abstract.html",
      "...",
    ],
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
        paddingTop: "4em",
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
        src="https://ghbtns.com/github-btn.html?user=sfu-db&repo=dataprep&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="150"
        height="30"
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
            <span className={style.packageSyntax}>dataprep.datasets</span>{" "}
            <span className={style.declareSyntax}>import</span> load_dataset
          </li>
          <li>
            <span className={style.declareSyntax}>from</span>{" "}
            <span className={style.packageSyntax}>dataprep.eda</span>{" "}
            <span className={style.declareSyntax}>import</span> create_report
          </li>
          <li></li>
          <li>
            df = load_dataset(
            <span className={style.paramSyntax}>"titanic"</span>)
          </li>
          <li>create_report(df).show()</li>
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
            <span className={style.declareSyntax}>import</span> connect
          </li>
          <li></li>
          <li>
            dc = connect(<span className={style.paramSyntax}>"twitter"</span>,
            _auth=
            <span className={style.paramSyntax}>
              {"{"}"client_id":client_id, "client_secret":client_secret{"}"}
            </span>
            )
          </li>
          <li></li>
          <li>
            df = <span className={style.declareSyntax}>await</span> dc.query(
            <span className={style.paramSyntax}>"twitter"</span>, q=
            <span className={style.paramSyntax}>"covid-19"</span>, _count=
            <span className={style.paramSyntax}>1000</span>)
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
        height="449"
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
            {dblpQueryData.head.map((item: number | string, id: number) => (
              <th key={id}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(dblpQueryData.body).map((row: string, id: number) => {
            const data = dblpQueryData.body[row]
            return (
              <tr key={id}>
                <td>{row}</td>
                <td>{data[0]}</td>
                <td>{data[1]}</td>
                <td>{data[2]}</td>
                <td>{data[3]}</td>
                <td>{data[4]}</td>
                <td>{data[5]}</td>
                <td>{data[6]}</td>
                <td>{data[7]}</td>
              </tr>
            )
          })}
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
          <li>Address Cleaning Report: </li>
          <li style={{ textIndent: "5em" }}>848 values cleaned (84.8%)</li>
          <li style={{ textIndent: "5em" }}>
            150 values unable to be parsed (15.0%), set to NaN
          </li>
          <li>
            Result contains 848 (84.8%) values in the correct format and 152
            null values (15.2%)
          </li>
        </ul>
      </div>
      <div className={style.cleanTable}>
        <table>
          <thead>
            <tr>
              {countryTableData.head.map(
                (item: number | string, id: number) => (
                  <th key={id}>{item}</th>
                )
              )}
            </tr>
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
                    <td>{data[2]}</td>
                    <td>{data[3]}</td>
                    <td>{data[4]}</td>
                    <td>{data[5]}</td>
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
        <span className={style.declareSyntax}>import</span> connect
      </li>
      <li>
        dc = connect(
        <span className={style.paramSyntax}>"dblp"</span>, _concurrenncy=
        <span className={style.paramSyntax}>5</span>)
      </li>
      <li>
        df = <span className={style.declareSyntax}>await</span> dc.query(
        <span className={style.paramSyntax}>"publication"</span>, q=
        <span className={style.paramSyntax}>"NeurIPS 2020"</span>, _count=
        <span className={style.paramSyntax}>5000</span>)
      </li>
    </ol>
  </div>
)

export const EdaCode: React.FC = () => (
  <div className={style.codeArea}>
    <ol>
      <li>
        <span className={style.declareSyntax}>from</span>{" "}
        <span className={style.packageSyntax}>dataprep.datasets</span>{" "}
        <span className={style.declareSyntax}>import</span> load_dataset
      </li>
      <li>
        <span className={style.declareSyntax}>from</span>{" "}
        <span className={style.packageSyntax}>dataprep.eda</span>{" "}
        <span className={style.declareSyntax}>import</span> plot
      </li>
      <li>
        df = load_dataset(
        <span className={style.paramSyntax}>"titanic"</span>)
      </li>
      <li>
        plot(df, <span className={style.paramSyntax}>"Age"</span>)
      </li>
    </ol>
  </div>
)

export const CleanCode: React.FC = () => (
  <div className={style.codeArea}>
    <ol>
      <li>
        <span className={style.declareSyntax}>from</span>{" "}
        <span className={style.packageSyntax}>dataprep.datasets</span>{" "}
        <span className={style.declareSyntax}>import</span> load_dataset
      </li>
      <li>
        <span className={style.declareSyntax}>from</span>{" "}
        <span className={style.packageSyntax}>dataprep.clean</span>{" "}
        <span className={style.declareSyntax}>import</span> clean_address
      </li>
      <li>
        df = load_dataset(
        <span className={style.paramSyntax}>"waste_hauler"</span>)
      </li>
      <li>clean_address(df, "LOCAL ADDRESS")</li>
    </ol>
  </div>
)
