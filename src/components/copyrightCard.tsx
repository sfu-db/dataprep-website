import React from "react"
import style from "../styles/copyrightCard.module.sass"

const CopyrightCard: React.FC = () => (
  <div className={style.copyright}>
    <p>© 2020 SFU Database System Lab. All rights reserved.</p>
  </div>
)

export default CopyrightCard
