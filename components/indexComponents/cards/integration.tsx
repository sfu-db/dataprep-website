/* eslint-disable @next/next/no-img-element */

type IntegationCardProps = {
  title: string
  content: string
  element: JSX.Element
}

export const Gh = () => {
  return (
    <div className="h-44 flex flex-col justify-between items-center">
      <img src="/images/ghicon.svg" alt="GitHub Icon" />
      <iframe
        src="https://ghbtns.com/github-btn.html?user=sfu-db&repo=dataprep&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="135"
        height="30"
        title="GitHub"
      ></iframe>
    </div>
  )
}

export const IntegationCard = ({
  title,
  content,
  element,
}: IntegationCardProps) => {
  return (
    <div className="mb-10 w-full flex flex-initial flex-col flex-nowrap justify-center items-center md:w-1/3">
      <div className="w-56 h-56 bg-primary-50 flex justify-center items-center rounded-full">
        <div className="flex-initial">{element}</div>
      </div>
      <div className="max-w-xl md:w-56 md:text-center lg:w-72">
        <h4 className="text-primary-500 font-semibold my-5 md:h-20">{title}</h4>
        <p className="font-light">{content}</p>
      </div>
    </div>
  )
}
