import React from "react"

const style = {
  width: "1000px",
  margin: "auto",
}

const SectionLayout: React.FC<React.ReactNode> = ({ children }) => {
  return <div style={style}>{children}</div>
}

export default SectionLayout
