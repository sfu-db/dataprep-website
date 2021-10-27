/* eslint-disable @next/next/no-img-element */
import learningCatalog from "../../public/data/learning_catalog.json"
import blogList from "../../public/data/blogs.json"

import videoList from "../../public/data/videos.json"

import talkList from "../../public/data/talks.json"
import exampleList from "../../public/data/example_notebooks.json"

// import quotesList from "../../public/data/quotes.json"


import Link from "next/link"


type LearnBannerProps = {
  banner: string
}

const LearnBanner = ({ banner }: LearnBannerProps) => (
  <h4>{banner} </h4>
)


const LearnCatalogItem = () => (
  <section className="siderbar-toc">
    <ul>
      {learningCatalog["catalog_item"].map(catalogItem => (
        <li key={catalogItem.item}>
          <Link href={catalogItem.link.toLowerCase()}>
            <a className="category">{catalogItem.item}</a>
          </Link>
        </li>
      ))
      }
    </ul>
  </section>
)
const LearnBlogPostsList = () => (
  <section className="learning-content" id="blog">
    <h2>
      <a className="headerlink" href="#blog">#</a>Blogs
    </h2>
    <ul className="blog-lists">
      {blogList.map(blogItem => (
        <li key={blogItem.title}>
          <p>
            <a target="_blank" href={`${blogItem.link}`} rel="noopener noreferrer">{blogItem.title}<span className="suffix-date"> ({blogItem.post_date})</span></a>
            {/* <p> post by {blogItem.author} at {blogItem.post_date}</p> */}
          </p>
        </li>
      ))
      }
    </ul >
  </section>
)


const LearnTalkPostsList = () => (
  <section className="learning-content" id="talk">
    <h2>
      <a className="headerlink" href="#Talks">#</a>Talks
    </h2>
    <ul className="blog-lists">
      {talkList.map(talkItem => (
        talkItem.slide_link ? (
          <li key={talkItem.title}>
            <p>
              {talkItem.link ? (
                <>
                  <a target="_blank" href={`${talkItem.link}`} rel="noopener noreferrer">{talkItem.title}
                  </a>
                  <span className="slide-link"><a target="_blank" href={`${talkItem.link}`} rel="noreferrer">[Video]</a></span>
                </>) : (
                <>
                  <a target="_blank" href={`${talkItem.slide_link}`} rel="noopener noreferrer">{talkItem.title}</a>
                </>)}
              <span className="slide-link"><a target="_blank" href={`${talkItem.slide_link}`} rel="noreferrer">[Slide]</a></span>
            </p>

          </li>
        ) : (
          <li key={talkItem.title}>
            <p>
              {talkItem.link ? (
                <>
                  <a target="_blank" href={`${talkItem.link}`} rel="noopener noreferrer">{talkItem.title}</a>

                  <span className="slide-link"><a target="_blank" href={`${talkItem.link}`} rel="noreferrer">[Video]</a></span>
                </>) : (
                <>
                  <a rel="noopener noreferrer">{talkItem.title}</a>
                </>)}
            </p>

          </li>
        )
      ))
      }
    </ul>
  </section>
)


const LearnVideoPostsList = () => (

  <section className="learning-content" id="video">
    <h2 >
      <a className="headerlink" href="#Videos">#</a>Videos
    </h2>
    <ul className="video-lists">
      {videoList.map(item => (
        <li key={item.title}>
          <h3>
            {/* <a className="headerlink" href={`${item.title}`}>{item.title}#</a> */}
            {item.title}<a className="headerlink" href={`${item.title}`}>#</a>
          </h3>

          <iframe className="video-iframe" src={`${item.link}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </li>
      ))}
    </ul>
  </section>
)

const LearnExamplePostsList = () => (
  <section className="learning-content" id="notebooks">

    <h2>
      <a className="headerlink" href="#Example">#</a>Notebooks
    </h2>
    <ul className="blog-lists">
      {exampleList.map(exampleItem => (
        <li key={exampleItem.item}>
          <p>
            <a target="_blank" href={`${exampleItem.link}`} rel="noopener noreferrer">{exampleItem.item}</a>
            {/* <p> post by {blogItem.author} at {blogItem.post_date}</p> */}
          </p>
        </li>
      ))
      }
    </ul >
  </section>

)

// const LearnQuotesList = () => (
//   <ul>
//     {quotesList.map(quotesItem => (

//       <li key={quotesItem.quote}>
//         <h3>
//           <a target="_blank" href={`${quotesItem.link}`} rel="noopener noreferrer">{quotesItem.quote}</a>

//         </h3>

//       </li>

//     ))
//     }
//   </ul >
// )



const Learn = () => (
  <section className="learning-container">
    <div className="learning-sidebar">

      <LearnBanner banner={learningCatalog['banner']} />
      <LearnCatalogItem />
    </div>
    <div className="learning-wrapper " id="talk">


      <LearnTalkPostsList></LearnTalkPostsList>
      <LearnBlogPostsList></LearnBlogPostsList>
      <LearnVideoPostsList></LearnVideoPostsList>
      <LearnExamplePostsList />
    </div>
  </section >

)

export default Learn
