import React from "react"
import style from "../styles/CompComponent.module.sass"

const CompComponent = () => {
  return (
    <section className={style.compContainer}>
      <h1>DataPrep Components</h1>
      <div className={style.compContent}>
        <div className={style.compType}>
          <h3>Available to Use</h3>
          <div className={`${style.compDesc} ${style.compDesc1}`}>
            <div>DataPrep.Connector</div>
            <div>DataPrep.EDA</div>
          </div>
        </div>

        <div className={style.compType}>
          <h3>Under Development</h3>
          <div className={`${style.compDesc} ${style.compDesc2}`}>
            <div>DataPrep.Clean</div>
          </div>
        </div>

        <div className={style.compType}>
          <h3>Planning</h3>
          <div className={`${style.compDesc} ${style.compDesc3}`}>
            <div>DataPrep.Feature</div>
            <div>DataPrep.Integrate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompComponent
