import React from "react"
import graph from "../images/integration.png"
import logoSnippet from "../images/logoSnippet.svg"
import chart from "../images/chart.svg"
import github from "../images/github.svg"

export const ChartSnippet: React.FC = () => {
  return (
    <div>
      <img src={chart} alt="Why DataPrep Chart" />
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column nowrap",
        height: "245px",
      }}
    >
      <div className="snippet-img">
        <img src={github} alt="GitHub Icon" id="opensource-snippet" />
      </div>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=sfu-db&repo=dataprep&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="135"
        height="50"
        title="GitHub"
      ></iframe>
    </div>
  )
}
