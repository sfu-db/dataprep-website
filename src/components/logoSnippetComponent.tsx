import React from "react"
import colabLogo from "../images/colab.png"
import jupyterLogo from "../images/jupyter.png"
import kaggleLogo from "../images/kaggle.png"
import vscodeLogo from "../images/vscode.png"

const style: React.CSSProperties = {
  display: "flex",
  flexFlow: "row wrap",
  width: "310px",
  justifyContent: "space-evenly",
  alignItems: "center",
}

const LogoSnippet: React.FC = () => {
  return (
    <div style={style}>
      <div>
        <img src={jupyterLogo} alt="Jupyter logo" width="100" />
      </div>
      <div>
        <img src={colabLogo} alt="Colab logo" width="150" />
      </div>
      <div>
        <img src={kaggleLogo} alt="Kaggle" width="150" />
      </div>
      <div>
        <img src={vscodeLogo} alt="VScode logo" width="100" />
      </div>
    </div>
  )
}

export default LogoSnippet
