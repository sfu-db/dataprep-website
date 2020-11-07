import React from "react"
import style from "../styles/BrandComponent.module.sass"
import logo1 from "../images/logo1.png"
import logo2 from "../images/logo2.png"
import logo3 from "../images/logo3.png"
import logo4 from "../images/logo4.png"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"

const BrandComponent: React.FC = () => (
  <section className={style.brandContainer}>
    <h1>Brand</h1>
    <div className={style.brandContent}>
      <div className={style.logo}>
        <h2>Logo</h2>
        <div className={style.brandLogo}>
          <div>
            <img src={logo1} alt="DataPrep Logo 1" />
          </div>
          <div>
            <img src={logo2} alt="DataPrep Logo 2" />
          </div>
          <div>
            <img src={logo3} alt="DataPrep Logo 3" />
          </div>
          <div>
            <img src={logo4} alt="DataPrep Logo 4" />
          </div>
        </div>
      </div>
      <div className={style.icon}>
        <h2>Icon</h2>
        <div className={style.brandIcon}>
          <div>
            <img src={icon1} alt="DataPrep Icon 1" />
          </div>
          <div>
            <img src={icon2} alt="DataPrep Icon 2" />
          </div>
          <div>
            <img src={icon3} alt="DataPrep Icon 3" />
          </div>
          <div>
            <img src={icon4} alt="DataPrep Icon 4" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default BrandComponent
