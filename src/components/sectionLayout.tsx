import React from "react"

const style = {
  backgroundColor: "#E4E7F2",
  padding: "2em 0",
}

const SectionLayout: React.FC<React.ReactNode> = ({ children }) => {
  return <div style={style}>{children}</div>
}

export default SectionLayout
