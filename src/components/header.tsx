import React from "react"
import { Link } from "gatsby"
import style from "../styles/header.module.sass"
import logo from "../images/dataprep-logo.png"

type HeaderListItem = {
  link: Array<string>
}

const Header: React.FC<HeaderListItem> = ({ link }) => {
  const listItem = link.map((item: string, index: number) => (
    <li key={index}>
      <Link to={"/" + item}>{item}</Link>
    </li>
  ))
  return (
    <div className={style.navbar}>
      <img src={logo} alt="Data Prep" className={style.logo} width="270" />
      <ul>{listItem}</ul>
    </div>
  )
}

export default Header
