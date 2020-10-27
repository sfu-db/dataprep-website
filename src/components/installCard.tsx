import React from "react"
import style from "../styles/installCard.module.sass"

type InstallContent = {
  title: string
  command: string
  desc: string
}

const featureCard: React.FC<InstallContent> = ({ title, command, desc }) => {
  return (
    <div className={style["install-content"]}>
      <h1>{title}</h1>
      <h2>{command}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default featureCard
