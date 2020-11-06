import React from "react"

const style = {
  backgroundColor: "#c0c7df",
  paddingBottom: "1px",
}

const SectionLayout: React.FC<React.ReactNode> = ({ children }) => {
  return <div style={style}>{children}</div>
}

export default SectionLayout
