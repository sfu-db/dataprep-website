import Slogan from "../cards/slogan"
import { TerminalEda, TerminalConnector } from "../snippets/terminal"

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
        <div className="mt-2 md:relative md:left-8 md:bottom-10">
          <TerminalConnector />
        </div>
      </div>
    </div>
  </section>
)

export default Intro
