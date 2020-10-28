import React from "react"
import { Link } from "gatsby"
import style from "../styles/header.module.sass"
import logo from "../images/dataprep-logo.png"

interface HeaderListItem {
  text: string
  link: string | null
  id: string
}
type HeaderList = Array<HeaderListItem>

const Header: React.FC<{ linkArray: HeaderList }> = ({ linkArray }) => {
  const listItem = linkArray.map((item: HeaderListItem) =>
    item.link ? (
      <li key={item.id}>
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.text}
        </a>
      </li>
    ) : (
      <li key={item.id}>
        <Link to={"/" + item.text}>{item.text}</Link>
      </li>
    )
  )

  return (
    <div className={style.navbar}>
      <img src={logo} alt="Data Prep" className={style.logo} width="270" />
      <ul>{listItem}</ul>
    </div>
  )
}

export default Header
