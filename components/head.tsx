/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

type LinkItem = {
  text: string
  link?: string
}

const linkArray: Array<LinkItem> = [
  {
    text: "Documentation",
    link: "https://sfu-db.github.io/dataprep/index.html",
  },
  { text: "Install", link: "/#install" },
  { text: "Team" },
  { text: "GitHub", link: "https://github.com/sfu-db/dataprep" },
  { text: "Brand" },
]

const Navbar = () => {
  const listItem = linkArray.map((item: LinkItem, key: number) =>
    item.link ? (
      <li
        key={key}
        className="text-base text-center flex-auto inline-block py-1 px-2 transition-colors duration-300 ease-linear border-b-2 border-solid border-transparent hover:border-primary-500 lg:px-5 lg:text-xl"
      >
        <a href={item.link}>{item.text}</a>
      </li>
    ) : (
      <li
        key={key}
        className="text-base text-center flex-auto inline-block py-1 px-2 transition-colors duration-300 ease-linear border-b-2 border-solid border-transparent hover:border-primary-500 lg:px-5 lg:text-xl"
      >
        <Link href={"/" + item.text.toLowerCase()}>
          <a>{item.text}</a>
        </Link>
      </li>
    )
  )

  return (
    <div className="flex-initial">
      <ul className="flex justify-between items-center">{listItem}</ul>
    </div>
  )
}

const Head = () => (
  <div className="flex flex-col justify-center items-center pt-5 md:flex-row md:justify-between">
    <div className="flex-initial cursor-pointer">
      <Link href="/" passHref>
        <img
          src="/images/dataprep-logo.png"
          alt="Data Prep Logo"
          width="320"
          height="81"
        />
      </Link>
    </div>
    <Navbar />
  </div>
)

export default Head
