import React from "react"
import "../styles/layout.sass"

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return <div className="layout-container">{children}</div>
}

export default Layout
