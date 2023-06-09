import * as React from "react"
import { Layout } from "../components/layout"
import {
  container,
  gridLeft,
  twoColumnGrid,
  gridRight,
  coloredBox,
  paragraph,
  subHeader,
  gunnerz,
  posts,
  gridPosts,
  paddingBottomAndTop,
  client,
  clientList,
  socialsRow,
  socials,
  babyPadding,
} from "./creatorz.module.css"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
function Hero(props) {
  return <div className={container}></div>
}

export default function IndexPage({ data }) {
  const { videos } = useStaticQuery(graphql`
    {
      videos: allContentfulVideos {
        edges {
          node {
            thumbnail {
              description
              gatsbyImageData
            }
            title
            url
          }
        }
      }
    }
  `)
  console.log(videos)
  return (
    <Layout>
      <Hero />
      <div className={container}>
        <div className={twoColumnGrid}>
          <div className={gridLeft}>
            <StaticImage atl="" src={"../images/IMG_5816.jpg"} />
          </div>
          <div className={gridRight}>
            <div className={coloredBox}>
              Darius and Dare Moreno are the creative duo behind Dare Dollz. The
              twin siblings grew up in Washignton D.C. before moving to New York
              City in their late teens.
            </div>
          </div>
        </div>
        <div className={paddingBottomAndTop}>
          <span className={subHeader}>Bio</span>
          <div className={babyPadding}>
            <p className={paragraph}>
              Darius earned a degree in illustration at Parsons The New School
              of Design and in his junior year illustrated the cover of grammy
              nominated album “At What Cost” by Goldlink which catapulted his
              career as a sought after illustrator. What sets Moreno’s work
              apart is his profound ability to infuse his artwork with the
              essence of black and Latino culture, reflecting his own
              experiences and heritage. His exceptional illustrations have
              graced the covers of renowned publications like Essence Magazine,
              where he skillfully captures the beauty of these communities. His
              work not only celebrates the rich tapestry of black and Latino
              culture but also challenges societal norms and stereotypes, paving
              the way for greater inclusivity and understanding.Through his art,
              Darius has become a powerful voice within the queer and
              Afro-Latino communities, using his platform to inspire and uplift
              others.
            </p>
            <p className={paragraph}>
              Dare, on the other hand, embarked on a different artistic path,
              while studying theatre at Penn State she took creative writing
              courses where she discovered her knack for storytelling. When she
              relocated to New York in 2015, Dare ventured into the world of
              food and travel vlogging (video blogging), creating a captivating
              web series titled "A Girl's Gotta Eat!" The series brought women
              from various industries together to discuss their careers while
              trying out culinary delights around the city. Her vlog's success
              led her to an exploration of food in countries like Japan, Taiwan,
              and South Korea, broadening her professional connections and
              enriching her creative repertoire. Dare continues to use her
              platform to connect women in business, especially of color, all
              over the world with one another, building a community for support
              and guidance.
            </p>
            <p className={paragraph}>
              In the summer of 2018, during a visit to their grandmother, a
              porcelain doll collector, the twins were struck by inspiration.
              Drawing from their experience in sculpting and sewing, they
              embarked on an endeavor to create their own line of dolls. The
              result was the birth of Dare Dollz. Their dolls, known for their
              bold and fabulous designs, became a sensation, attracting
              attention from big companies like Puma, who collaborated with Dare
              Dollz in Spring 2022.
            </p>
            <p className={paragraph}>
              Today, Darius and Dare are based in Los Angeles, where they have
              established their own home studio. From this artistic haven, they
              continue to push boundaries and explore new realms of creativity.
              In addition to their beloved Dare Dollz, they delve into a variety
              of artistic endeavors, including comics, claymation, and other
              captivating projects.
            </p>
          </div>
        </div>
        <p className={coloredBox}>
          For business/press inquires shoot us an email at{" "}
          <a href="mailto: daredollz95@gmail.com"> daredollz95@gmail.com</a>
        </p>
        <div className={paddingBottomAndTop}>
          <span className={subHeader}>Recent Work</span>
          <div className={gridPosts}>
            {videos.edges.map(post => {
              console.log(post.node.url)
              return (
                <div className={posts}>
                  <a target="_blank" href={post.node.url}>
                    <GatsbyImage image={post.node.thumbnail.gatsbyImageData} />
                    <p className={gunnerz}>{post.node.title}</p>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
        <span className={subHeader}>Press and Clients</span>
        <section className={clientList}>
          <a className={client}>Puma</a>
          <a className={client}>Vice</a>
          <a className={client}>Office Magazine</a>
          <a className={client}>Paper</a>
          <a className={client}>The Fader</a>
          <a className={client}>Source</a>
          <a className={client}>Bubblegum Club</a>
          <a className={client}>Redbull Radio</a>
          <a className={client}>EverPress</a>
          <a className={client}>Naveszn</a>
        </section>
        <div className={paddingBottomAndTop}>
          <span className={subHeader}>Socials</span>
        </div>
        <section className={socialsRow}>
          <a
            target="_blank"
            href="https://www.facebook.com/Daredollz/"
            className={socials}
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="1.414"
            >
              <path
                d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
                fill-rule="nonzero"
              />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/daredollz/"
            className={socials}
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="1.414"
            >
              <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z" />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/daredollz"
            className={socials}
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="1.414"
            >
              <path
                d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z"
                fill-rule="nonzero"
              />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/Daredollz/"
            className={socials}
          >
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              id="icons"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M25.762 7.416a6.83 6.83 0 0 1 -0.59 -0.344 8.304 8.304 0 0 1 -1.516 -1.288 7.154 7.154 0 0 1 -1.71 -3.526h0.006C21.822 1.494 21.876 1 21.884 1H16.732v19.924c0 0.268 0 0.532 -0.012 0.794l-0.006 0.098c0 0.014 0 0.03 -0.004 0.044v0.012a4.376 4.376 0 0 1 -2.202 3.472 4.3 4.3 0 0 1 -2.132 0.562c-2.4 0 -4.346 -1.958 -4.346 -4.376s1.946 -4.376 4.346 -4.376a4.306 4.306 0 0 1 1.338 0.212L13.72 12.12a9.572 9.572 0 0 0 -7.376 2.158 10.112 10.112 0 0 0 -2.206 2.72c-0.218 0.376 -1.038 1.882 -1.138 4.328 -0.062 1.388 0.354 2.826 0.554 3.42v0.012c0.126 0.35 0.61 1.544 1.398 2.552a10.47 10.47 0 0 0 2.236 2.106v-0.012l0.012 0.012c2.494 1.696 5.26 1.584 5.26 1.584 0.478 -0.02 2.082 0 3.904 -0.864 2.02 -0.956 3.17 -2.382 3.17 -2.382a9.904 9.904 0 0 0 1.728 -2.87 10.766 10.766 0 0 0 0.622 -3.284V11.03c0.062 0.038 0.896 0.588 0.896 0.588s1.2 0.768 3.07 1.27c1.342 0.356 3.152 0.432 3.152 0.432V8.204c-0.634 0.068 -1.92 -0.132 -3.238 -0.788Z" />
            </svg>
          </a>
        </section>
      </div>

      {/* <StaticImage src="../images/dollbanner.png" /> */}
      {/* <ProductListing products={data?.shopifyCollection?.products} /> */}
    </Layout>
  )
}
