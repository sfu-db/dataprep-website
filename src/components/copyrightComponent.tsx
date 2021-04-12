import React from "react"

const CopyrightCcomponent: React.FC = () => (
  <div
    style={{
      backgroundColor: "#c0c7df",
      height: "50px",
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
    }}
  >
    <p
      style={{
        textAlign: "center",
        color: "#e6e9f2",
        fontSize: "1em",
      }}
    >
      © 2021 SFU Database System Lab. All rights reserved.
    </p>
  </div>
)

export default CopyrightCcomponent
