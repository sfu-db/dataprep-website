/* eslint-disable @next/next/no-img-element */
import Quote from "../cards/quote"
import { IntegationCard, Gh } from "../cards/integration"

const Feature = () => (
  <section>
    <div className="after:mx-auto after:block after:h-1 after:w-3/4 after:bg-primary-50 after:my-10">
      <Quote />
    </div>
    <div className="flex flex-col flex-nowrap justify-between items-center md:items-start md:flex-row">
      <IntegationCard
        title="Designed for Notebook Users"
        content="DataPrep is designed for computational notebooks, the most popular environment among data scientists."
        element={
          <img
            className="w-full h-full"
            src="/images/notebooks.svg"
            alt="Notebooks"
          />
        }
      />
      <IntegationCard
        title="Integrate Seamlessly with the Python Ecosystem"
        content="DataPrep is built using Pandas/Dask DataFrame and can be seamlessly integrated with other Python libraries."
        element={
          <img
            className="w-full h-full"
            src="/images/libs.svg"
            alt="Libraries"
          />
        }
      />
      <IntegationCard
        title="Embrace Open Source"
        content="DataPrep is free, open-source software released under the MIT
    license. Anyone can reuse DataPrep code for any purpose."
        element={<Gh />}
      />
    </div>
  </section>
)

export default Feature
