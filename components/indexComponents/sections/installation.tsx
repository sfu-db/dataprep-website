const Installation = () => (
  <section className="py-40 text-center" id="install">
    <div className="bg-white py-2 shadow-lg">
      <h1 className="font-bold my-2">Get started instantly</h1>
      <p className="mx-auto w-80 font-mono font-semibold bg-secondary-100 py-2 select-all selection:bg-primary-500 hover:bg-opacity-80">
        <span>pip install -U dataprep</span>
      </p>
      <p className="my-7 font-light">
        And then check out{" "}
        <a
          className="text-primary-500 font-medium hover:text-primary-300"
          href="https://sfu-db.github.io/dataprep/index.html"
          target="_blank"
          rel="noreferrer"
        >
          documentation
        </a>{" "}
        and{" "}
        <a
          className="text-primary-500 font-medium hover:text-primary-300"
          href="https://github.com/sfu-db/dataprep#examples--usages"
          target="_blank"
          rel="noreferrer"
        >
          examples
        </a>
        !
      </p>
    </div>
  </section>
)

export default Installation
