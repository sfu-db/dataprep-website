type BlockProp = {
  name: string
  status: string
}

const Block = ({ name, status }: BlockProp) => (
  <div
    className={`flex flex-col justify-center items-center h-32 w-full md:w-80 my-4 shadow-lg last:shadow-none + ${
      status === "Available to use"
        ? "bg-white"
        : "box-border border-8 border-primary-400 border-dashed bg-secondary-100"
    }`}
  >
    <h4 className="text-primary-400 font-bold">{name}</h4>
    <p className="italic">{status}</p>
  </div>
)

const Components = () => (
  <section className="py-10">
    <h1 className="text-primary-500 mb-10 font-bold">DataPrep Components</h1>
    <div className="bg-primary-50 py-px px-5 cursor-default mb-5">
      <h4 className="text-primary-400 font-bold my-5">DataPrep</h4>
      <div className="flex flex-col justify-evenly items-start md:flex-row md:flex-wrap">
        <Block name={"DataPrep.Connector"} status={"Available to use"} />
        <Block name={"DataPrep.EDA"} status={"Available to use"} />
        <Block name={"DataPrep.Clean"} status={"Available to use"} />
        <Block name={"DataPrep.Feature"} status={"Planning"} />
        <Block name={"DataPrep.Integrate"} status={"Planning"} />
        <div className="h-32 w-full md:w-80 flex flex-col justify-center items-center">
          <h4 className="text-primary-400 text-center font-bold">
            ... and more
          </h4>
        </div>
      </div>
    </div>
  </section>
)

export default Components
