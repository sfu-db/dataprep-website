import React from "react"
import graph from "../images/integration.png"
import licenseIcon from "../images/license.svg"
import logoSnippet from "../images/logoSnippet.svg"

export const CodeSnippet: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        width: "310px",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    ></div>
  )
}

export const IntegrationSnippet: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "60px",
      }}
    >
      <img src={graph} alt="Integration" id="integration-snippet" />
    </div>
  )
}

export const LogoSnippet: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "40px",
        left: "40px",
      }}
    >
      <img src={logoSnippet} alt="Logo Snippet" id="logo-snippet" />
    </div>
  )
}

export const OpensourceSnippet: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "100%",
      }}
    >
      <iframe
        src="https://ghbtns.com/github-btn.html?user=sfu-db&repo=dataprep&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="135"
        height="30"
        title="GitHub"
      ></iframe>
      <div>
        <img src={licenseIcon} alt="MIT License Icon" width="120" />
      </div>
    </div>
  )
}
