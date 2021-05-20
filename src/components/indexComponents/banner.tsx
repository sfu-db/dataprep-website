import React, { useState } from "react"
import style from "../../styles/banner.module.sass"

const Banner: React.FC = () => {
  const [isHiding, setHiding] = useState<boolean>(false)

  if (isHiding) {
    return <></>
  } else {
    return (
      <div className={style.bannerContainer}>
        <div className={style.innerDiv}>
          <div className={style.leftPsudoMargin}></div>
          <h4>
            DataPrep V0.3 is out now! Click{" "}
            <strong>
              <a
                href="https://github.com/sfu-db/dataprep/releases/tag/v0.3.0"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
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
