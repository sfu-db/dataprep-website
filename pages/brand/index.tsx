import Head from "../../components/head"
import BrandComponent from "../../components/brandComponents/brand"
import Copyright from "../../components/copyright"
import Meta from "../../components/meta"
import SectionLayout from "../../components/sectionLayout"

const Brand = () => {
  return (
    <>
      <Meta />
      <SectionLayout colored>
        <Head />
        <BrandComponent />
      </SectionLayout>
      <Copyright />
    </>
  )
}

export default Brand
