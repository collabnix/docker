import * as React from 'react'
import { graphql } from 'gatsby'
import { RootLayout as Layout } from '../Layout'
import { PostCard } from '../PostCard'
import { TableOfContents } from '../TableOfContents'
import { Global } from '../styles/global.style'

const BlogPage = ({
  data: {
    allMdx: { edges },
  },
}: any) => {
  const posts = edges
    .filter((edge: any) => !!edge.node.frontmatter.date)
    .map((edge: any) => <PostCard key={edge.node.id} post={edge.node} />)
  return (
    <Global>
      <Layout>
        <div>{posts}</div>
      </Layout>
    </Global>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query ($path: String!) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { root: { eq: $path } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
