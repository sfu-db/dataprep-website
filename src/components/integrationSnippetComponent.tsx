import React from "react"
import graph from "../images/integration.png"

const style: React.CSSProperties = {
  width: "400px",
}

const IntegrationSnippet: React.FC = () => {
  return (
    <div style={style}>
      <img src={graph} alt="Integration" width="400" />
    </div>
  )
}

export default IntegrationSnippet
