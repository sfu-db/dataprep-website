import React from "react"
import licenseIcon from "../images/license.png"

const style: React.CSSProperties = {
  display: "flex",
  flexFlow: "row nowrap",
  width: "310px",
  justifyContent: "space-evenly",
  alignItems: "center",
}

const OpensourceSnippet: React.FC = () => {
  return (
    <div style={style}>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=sfu-db&repo=dataprep&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="170"
        height="30"
        title="GitHub"
      ></iframe>
      <div>
        <img src={licenseIcon} alt="MIT License Icon" width="120" />
      </div>
    </div>
  )
}

export default OpensourceSnippet
