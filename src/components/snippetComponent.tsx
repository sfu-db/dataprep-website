import React from "react"
import graph from "../images/integration.png"
import colabLogo from "../images/colab.png"
import jupyterLogo from "../images/jupyter.png"
import kaggleLogo from "../images/kaggle.png"
import vscodeLogo from "../images/vscode.png"
import licenseIcon from "../images/license.svg"

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
        width: "350px",
        position: "relative",
        top: "90px",
      }}
    >
      <img src={graph} alt="Integration" width="350" />
    </div>
  )
}

export const LogoSnippet: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column wrap",
        height: "250px",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        top: "60px",
      }}
    >
      <div style={{ flex: "0 1 150px" }}>
        <img src={jupyterLogo} alt="Jupyter logo" width="100" />
      </div>
      <div style={{ flex: "0 1 80px" }}>
        <img src={kaggleLogo} alt="Kaggle" width="120" />
      </div>
      <div style={{ flex: "0 1 150px" }}>
        <img src={vscodeLogo} alt="VScode logo" width="100" />
      </div>
      <div style={{ flex: "0 1 150px" }}>
        <img src={colabLogo} alt="Colab logo" width="150" />
      </div>
    </div>
  )
}

export const OpensourceSnippet: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        height: "150px",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        top: "100px",
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
