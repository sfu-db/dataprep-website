import React from "react"
import "../styles/featureCard.module.scss"

type CardContent = {
  title: string
  subtitle?: string
  desc: string
}

const featureCard: React.FC<CardContent> = ({ title, subtitle, desc }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default featureCard
