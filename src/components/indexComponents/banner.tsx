import React, { useState } from "react"
import style from "../../styles/banner.module.sass"

interface IBanner {
  version: number | string
  link: string
}

const Banner: React.FC<IBanner> = ({ version, link }) => {
  const [isHiding, setHiding] = useState(false)

  if (isHiding) {
    return <></>
  } else {
    return (
      <div className={style.bannerContainer}>
        <div className={style.innerDiv}>
          <div className={style.leftPsudoMargin}></div>
          <h4>
            DataPrep V{version} is out now! Click{" "}
            <strong>
              <a href={link}>here</a>
            </strong>{" "}
            for more.
          </h4>
          <button onClick={() => setHiding(true)}>✕</button>
        </div>
      </div>
    )
  }
}

export default Banner
