type AppProps = {
  children: JSX.Element | JSX.Element[]
  colored?: boolean | undefined
  waved?: boolean | undefined
}


const LearningSectionLayout = ({ children, colored }: AppProps) => {
  return (
    <>
      <div className={colored ? "bg-primary-50" : ""}>
        <div className="container mx-auto px-5 4xl:max-w-7xl">{children}</div>
      </div>
    </>
  )
}

export default LearningSectionLayout
