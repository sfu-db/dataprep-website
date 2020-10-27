import Head from "../../components/head"
import Copyright from "../../components/copyright"
import Meta from "../../components/meta"
import SectionLayout from "../../components/sectionLayout"
import Team from "../../components/teamComponents/team"

const Brand = () => {
  return (
    <>
      <Meta />
      <SectionLayout colored>
        <Head />
        <Team />
      </SectionLayout>
      <Copyright />
    </>
  )
}

export default Brand
