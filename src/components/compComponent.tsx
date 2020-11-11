import React from "react"
import style from "../styles/CompComponent.module.sass"

type BlockProp = {
  name: string
  status: string
}

const Block: React.FC<BlockProp> = ({ name, status }) => (
  <div
    className={
      status === "Available to use" ? style.solidBlock : style.dashedBlock
    }
  >
    <h3>{name}</h3>
    <p>{status}</p>
  </div>
)

const CompComponent: React.FC = () => (
  <section className={style.compContainer}>
    <h1>DataPrep Components</h1>
    <div className={style.blockContainer}>
      <h3>DataPrep</h3>
      <div className={style.blocks}>
        <Block name={"DataPrep.Connector"} status={"Available to use"} />
        <Block name={"DataPrep.EDA"} status={"Available to use"} />
        <Block name={"DataPrep.Clean"} status={"Under development"} />
        <Block name={"DataPrep.Feature"} status={"Planning"} />
        <Block name={"DataPrep.Integrate"} status={"Planning"} />
        <div>
          <h3>... and more</h3>
        </div>
      </div>
    </div>
  </section>
)

export default CompComponent
