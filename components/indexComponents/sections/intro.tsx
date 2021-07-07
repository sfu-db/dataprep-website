import Slogan from "../cards/slogan"
import {
  TerminalEda,
  TerminalConnector,
  TerminalClean,
} from "../snippets/terminal"

const Intro = () => (
  <section className="mt-5">
    <div className="flex flex-col justify-between items-center md:flex-row">
      <div className="flex-initial w-full md:w-1/2">
        <Slogan />
      </div>
      <div className="flex-initial w-full md:w-1/2">
        <div>
          <TerminalEda />
        </div>
        <div className="mt-2 md:relative md:left-5 md:bottom-6 xl:left-8 xl:bottom-8">
          <TerminalConnector />
        </div>
        <div className="mt-2 md:relative md:left-10 md:bottom-12 xl:left-16 xl:bottom-16">
          <TerminalClean />
        </div>
      </div>
    </div>
  </section>
)

export default Intro
