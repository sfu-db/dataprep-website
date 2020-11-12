import React from "react"
import { Link } from "gatsby"
import style from "../styles/header.module.sass"
import logo from "../images/dataprep-logo.png"

type LinkItem = {
  text: string
  link?: string
}

const linkArray: Array<LinkItem> = [
  {
    text: "Documentation",
    link: "https://sfu-db.github.io/dataprep/index.html",
  },
  { text: "Install", link: "#install" },
  // { text: "Commnutiy" },
  { text: "GitHub", link: "https://github.com/sfu-db/dataprep" },
  { text: "Brand" },
]

const Header: React.FC = () => {
  const listItem = linkArray.map((item: LinkItem, key: number) =>
    item.link ? (
      <li key={key}>
        <a href={item.link}>{item.text}</a>
      </li>
    ) : (
      <li key={key}>
        <Link to={"/" + item.text.toLowerCase()}>{item.text}</Link>
      </li>
    )
  )

  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <Link to="/">
          <img src={logo} alt="Data Prep Logo" width="300" />
        </Link>
      </div>
      <ul>{listItem}</ul>
    </div>
  )
}

export default Header
