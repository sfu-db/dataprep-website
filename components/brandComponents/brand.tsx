/* eslint-disable @next/next/no-img-element */

type MediaHolderProps = {
  type: string
  content: string[]
}

const MediaHolder = ({ type, content }: MediaHolderProps) => (
  <div className="py-5">
    <h1 className="text-primary-500 font-bold my-5">{type}</h1>
    <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-5">
      {content.map((img, index) => (
        <div
          key={index}
          className="w-full border-2 border-solid rounded-xl border-primary-100 my-5 md:my-0 md:col-span-1"
        >
          <img
            className="w-full h-full"
            src={`/images/${img}.png`}
            alt={`DataPrep ${type} ${index + 1}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
)

const Brand = () => (
  <section>
    <MediaHolder type="Logo" content={["logo1", "logo2", "logo3", "logo4"]} />
    <MediaHolder type="Icon" content={["icon1", "icon2", "icon3", "icon4"]} />
  </section>
)

export default Brand
