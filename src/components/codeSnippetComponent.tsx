import React from "react"

const style: React.CSSProperties = {
  display: "flex",
  flexFlow: "row nowrap",
  width: "310px",
  justifyContent: "space-evenly",
  alignItems: "center",
}

const CodeSnippet: React.FC = () => {
  return <div style={style}></div>
}

export default CodeSnippet
