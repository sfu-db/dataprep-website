type AppProps = {
  children: JSX.Element | JSX.Element[]
  colored?: boolean | undefined
  waved?: boolean | undefined
}

const Wave = () => (
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#e8eaf4"
        fillOpacity="1"
        d="M0,224L48,234.7C96,245,192,267,288,234.7C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,106.7C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  </div>
)

const SectionLayout = ({ children, colored, waved }: AppProps) => {
  return (
    <>
      <div className={colored ? "bg-primary-50" : ""}>
        <div className="container mx-auto px-5 2xl:max-w-7xl">{children}</div>
      </div>
      {waved ? <Wave /> : <></>}
    </>
  )
}

export default SectionLayout
