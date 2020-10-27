import Head from "../components/head"
import SectionLayout from "../components/sectionLayout"
import Columns from "../components/indexComponents/sections/columns"
import Copyright from "../components/copyright"
import Components from "../components/indexComponents/sections/components"
import Explore from "../components/indexComponents/sections/explore"
import Feature from "../components/indexComponents/sections/feature"
import Installation from "../components/indexComponents/sections/installation"
import Intro from "../components/indexComponents/sections/intro"
import Meta from "../components/meta"
import Banner from "../components/indexComponents/banner"

const Index = () => {
  return (
    <>
      <Meta />
      <SectionLayout colored waved>
        <Head />
        <Banner />
        <Intro />
      </SectionLayout>
      <SectionLayout>
        <Feature />
      </SectionLayout>
      <SectionLayout colored>
        <Explore />
      </SectionLayout>
      <SectionLayout>
        <Components />
      </SectionLayout>
      <SectionLayout colored>
        <Installation />
      </SectionLayout>
      <SectionLayout>
        <Columns />
      </SectionLayout>
      <Copyright />
    </>
  )
}
export default Index
