import Head from "next/head"
import logo from "../public/images/dataprep-logo.png"

const Meta = () => (
  <Head>
    <meta charSet="utf-8" />
    <title>DataPrep — Low code data preparation in Python</title>
    <meta
      content="DataPrep is designed and optimized for computational notebooks, the most popular environment among data scientists"
      name="description"
    />
    <meta
      content="DataPrep — Low code data preparation in Python"
      property="og:sitename"
    />
    <meta content="https://dataprep.ai" property="url" />
    <meta
      content="DataPrep is designed and optimized for computational notebooks, the most popular environment among data scientists"
      name="og:description"
    />
    <meta content="https://dataprep.ai" property="og:url" />
    <meta
      content="DataPrep — Low code data preparation in Python"
      property="og:title"
    />
    <meta property="og:image" content={`${logo}`}></meta>
    <meta
      content="DataPrep is designed and optimized for computational notebooks, the most popular environment among data scientists"
      name="twitter:description"
    />
    <meta
      content="DataPrep — Low code data preparation in Python"
      property="twitter:title"
    />
    <meta property="twitter:image" content={`${logo}`}></meta>
    <meta name="twitter:card" content="summary_large_image"></meta>
    <link rel="canonical" href="https://dataprep.ai" />
  </Head>
)

export default Meta
