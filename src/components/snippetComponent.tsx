/* eslint-disable react/no-unescaped-entities */
import React from "react"
import graph from "../images/integration.svg"
import logoSnippet from "../images/logoSnippet.svg"
import chart from "../images/chart.svg"
import github from "../images/github.svg"
import style from "../styles/snippetComponent.module.sass"

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

export const NotebookFrame: React.FC<{ element: string }> = ({ element }) => {
  return (
    <div className={style.notebookIframeContainer}>
      <iframe
        style={{
          background: "#ffffff",
          borderRadius: "5px",
          boxShadow: "0 5px 25px rgba(0, 0, 0, .4)",
        }}
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
