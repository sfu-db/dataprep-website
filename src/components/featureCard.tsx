import React from "react"
import style from "../styles/featureCard.module.sass"

type CardContent = {
  title?: string
  subtitle?: string
  desc: string
}

const featureCard: React.FC<CardContent> = ({ title, subtitle, desc }) => {
  return (
    <div className={style["feature-card"]}>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <p>{desc}</p>
    </div>
  )
}

export default featureCard
