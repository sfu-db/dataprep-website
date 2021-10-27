import Head from "../../components/head"
import Copyright from "../../components/copyright"
import Meta from "../../components/meta"
import SectionLayout from "../../components/sectionLayout"
import Learning from "../../components/learningComponents/learning"
import LearningSectionLayout from "../../components/learningComponents/learningSectionLayout"

const Learn = () => {
  return (
    <>
      <Meta />
      <SectionLayout colored>
        <Head />
      </SectionLayout>
      <LearningSectionLayout colored>
        <Learning />
      </LearningSectionLayout>

      <Copyright />
    </>
  )
}

export default Learn
