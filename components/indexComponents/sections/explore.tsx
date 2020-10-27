import style from "../../../styles/explore.module.css"
import { ExampleCard } from "../cards/example"
import { EdaCode, CleanCode, ConnectorCode } from "../snippets/codes"
import cleanedDf from "../../../public/cleaned_df.json"
import connectorDf from "../../../public/connector.json"
// @ts-ignore
import plot from "../../../public/plot.html"

type FrameProps = {
  codes: JSX.Element
  render: JSX.Element | JSX.Element[]
}

type TableWrapperProps = {
  outputDiv?: JSX.Element
  tableData: ITableData
}

interface ITableData {
  columns: string[]
  index: number[]
  data: Array<string[]>
}

const Frame = ({ codes, render }: FrameProps) => (
  <div style={{ width: "490px" }}>
    {codes}
    {render}
  </div>
)

const TableWrapper = ({ outputDiv, tableData }: TableWrapperProps) => (
  <div className="border-2 border-solid border-primary-100 shadow-md">
    {outputDiv ? outputDiv : <></>}
    <div>
      <table className={style.tableStyle}>
        <thead>
          <tr>
            {tableData.columns.map(col => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.data.map((row, index) => (
            <tr key={index}>
              {row.map(col => (
                <td key={col}>
                  <div className="max-h-20 overflow-hidden overflow-ellipsis">
                    {col}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

const CleanDesc = () => (
  <div className="bg-white">
    <ul className="list-none font-mono text-xs pt-2 pl-2">
      <li>Address Cleaning Report: </li>
      <li style={{ textIndent: "8ch" }}>848 values cleaned (84.8%)</li>
      <li style={{ textIndent: "8ch" }}>
        150 values unable to be parsed (15.0%), set to NaN
      </li>
      <li>
        Result contains 848 (84.8%) values in the correct format and 152 null
        values (15.2%)
      </li>
    </ul>
  </div>
)
const Features = () => {
  return (
    <section className="flex flex-col flex-nowrap justify-between items-start py-5">
      <ExampleCard
        title="DataPrep.EDA"
        content="DataPrep.EDA is the fastest and the easiest EDA tool in Python. It
          allows data scientists to understand a Pandas/Dask DataFrame with a
          few lines of code in seconds."
        snippetComponent={
          <Frame
            codes={<EdaCode />}
            render={
              <iframe
                className="bg-white border-solid border-2 border-primary-100 shadow-md"
                srcDoc={plot}
                frameBorder="0"
                loading="lazy"
                scrolling="0"
                height="448"
                width="100%"
              ></iframe>
            }
          />
        }
        leftToRight={true}
      />
      <ExampleCard
        title="DataPrep.Clean"
        content="DataPrep.Clean aims to provide a large number of functions with a
          unified interface for cleaning and standardizing data of various
          semantic types in a Pandas or Dask DataFrame."
        snippetComponent={
          <Frame
            codes={<CleanCode />}
            render={
              <TableWrapper outputDiv={<CleanDesc />} tableData={cleanedDf} />
            }
          />
        }
        leftToRight={false}
      />
      <ExampleCard
        title="DataPrep.Connector"
        content="DataPrep.Connector is an intuitive, open-source API wrapper that
            speeds up development by standardizing calls to multiple APIs as a
            simple workflow. Streamline calls to multiple APIs through one
            intuitive library."
        snippetComponent={
          <Frame
            codes={<ConnectorCode />}
            render={<TableWrapper tableData={connectorDf} />}
          />
        }
        leftToRight={true}
      />
    </section>
  )
}

export default Features
