import React from "react"
import style from "../styles/featureCard.module.sass"

type CardContent = {
  title?: string
  subtitle?: string
  desc: string
}

const featureCard: React.FC<CardContent> = ({ title, subtitle, desc }) => {
  return (
    <div className={style.featureCardContainer}>
      <div className={style.featureCard}>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <p>{desc}</p>
      </div>
      <div className={style.featureSnipppet}></div>
    </div>
  )
}

export default featureCard
