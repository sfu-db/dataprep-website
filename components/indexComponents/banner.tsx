import { useState } from "react"
const Banner = () => {
  const [isHiding, setHiding] = useState<boolean>(false)

  if (isHiding) {
    return <></>
  } else {
    return (
      <div className="my-1 flex justify-center items-center w-full z-10 h-14 bg-primary-500 rounded-xl shadow">
        <div className="w-10 h-10 flex-initial"></div>
        <h3 className="text-base font-medium flex-auto text-center text-primary-50 lg:text-xl">
          DataPrep V0.3 is out now! Click{" "}
          <strong>
            <a
              href="https://github.com/sfu-db/dataprep/releases/tag/v0.3.0"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-100"
            >
              here
            </a>
          </strong>{" "}
          for more.
        </h3>
        <button
          className="w-10 h-10 flex-initial font-semibold text-3xl text-primary-50 hover:text-primary-100"
          onClick={() => setHiding(true)}
        >
          ✕
        </button>
      </div>
    )
  }
}

export default Banner
