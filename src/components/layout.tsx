import React from "react"
import "../styles/layout.scss"

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 1200, padding: `0 1rem` }}>
      {children}
    </div>
  )
}

export default Layout
