import React from "react"
import style from "../styles/footer.module.sass"

type FooterProp = {
  title: string
  desc?: string
  content: Array<string>
}

const FooterComponent: React.FC<FooterProp> = ({ title, desc, content }) => {
  const contentList = content.map((item: string, index: number) => (
    <li key={index}>{item}</li>
  ))

  return (
    <div className={style.footerContainer}>
      <h3>{title}</h3>
      {desc && <p>{desc}</p>}
      <ul>{contentList}</ul>
    </div>
  )
}

export default FooterComponent
