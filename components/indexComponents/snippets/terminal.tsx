import style from "../../../styles/terminal.module.css"
import { Declare, Package, Param } from "./codes"

type TerminalProps = {
  documentTitle: string
  documentContent: JSX.Element
}

const Terminal = ({ documentTitle, documentContent }: TerminalProps) => (
  <div className="rounded shadow-lg w-full md:w-11/12">
    <div className="cursor-default bg-gradient-to-b from-gray-50 to-gray-200 px-1 rounded-t rounded-r flex justify-start items-center">
      <div className="flex-initial w-3/12">
        <span className="w-3 h-3 inline-block rounded-xl ml-1 border-0 border-red-600 border-solid bg-red-500"></span>
        <span className="w-3 h-3 inline-block rounded-xl ml-1 border-0 border-green-600 border-solid bg-green-500"></span>
        <span className="w-3 h-3 inline-block rounded-xl ml-1 border-0 border-yellow-600 border-solid bg-yellow-500"></span>
      </div>
      <div className="flex-auto text-center font-sans text-xs select-none">
        {documentTitle}
      </div>
      <div className="felx-initial w-3/12"></div>
    </div>
    <div className={style.codeArea}>
      <ol className="pl-6 text-xs font-mono bg-white overflow-auto h-full rounded-b list-inside list-none xl:text-base">
        {documentContent}
      </ol>
    </div>
  </div>
)

export const TerminalEda = () => {
  // Code snippet for dataprep_eda.py
  // from dataprep.datasets import load_dataset
  // from dataprep.eda import create_report
  // df = load_dataset("titanic")
  // create_report(df).show()
  return (
    <Terminal
      documentTitle="dataprep_eda.py"
      documentContent={
        <>
          <li>
            <Declare text="from" /> <Package text="dataprep.datasets" />{" "}
            <Declare text="import" /> load_dataset
          </li>
          <li>
            <Declare text="from" /> <Package text="dataprep.eda" />{" "}
            <Declare text="import" /> create_report
          </li>
          <li></li>
          <li>
            df = load_dataset(
            <Param text='"titanic"' />)
          </li>
          <li>create_report(df).show()</li>
          <li></li>
          <li></li>
          <li></li>
        </>
      }
    ></Terminal>
  )
}

export const TerminalConnector = () => {
  // Code snippet for dataprep_connector.py
  // from dataprep.connector import connect
  // dc = connect("twitter", _auth={"client_id":client_id, "client_secret":client_secret})
  // df = await dc.query("twitter", q="covid-19", _count=1000)
  return (
    <Terminal
      documentTitle="dataprep_connector.py"
      documentContent={
        <>
          <li>
            <Declare text="from" /> <Package text="dataprep.connector" />{" "}
            <Declare text="import" /> connect
          </li>
          <li></li>
          <li>
            dc = connect(
            <Param text='"twitter"' />, _auth=
            <Param
              text={
                '{"}"client_id":client_id, "client_secret":client_secret{"}'
              }
            />
            )
          </li>
          <li></li>
          <li>
            df = <Declare text="await" /> dc.query(
            <Param text='"twitter"' />, q=
            <Param text='"covid-19"' />, _count=
            <Param text="1000" />)
          </li>
          <li></li>
          <li></li>
          <li></li>
        </>
      }
    ></Terminal>
  )
}

export const TerminalClean = () => {
  // from dataprep.datasets import load_dataset
  // from dataprep.clean import clean_address
  // df = load_dataset("waste_hauler")
  // clean_address(df, "LOCAL ADDRESS")
  return (
    <Terminal
      documentTitle="dataprep_clean.py"
      documentContent={
        <>
          <li>
            <Declare text="from" /> <Package text="dataprep.datasets" />{" "}
            <Declare text="import" /> load_dataset
          </li>
          <li>
            <Declare text="from" /> <Package text="dataprep.clean" />{" "}
            <Declare text="import" /> clean_address
          </li>
          <li></li>
          <li>
            df = load_dataset(
            <Param text='"waste_hauler"' />)
          </li>
          <li>
            clean_address(df, <Param text='"LOCAL ADDRESS"' />)
          </li>
          <li></li>
          <li></li>
          <li></li>
        </>
      }
    ></Terminal>
  )
}
