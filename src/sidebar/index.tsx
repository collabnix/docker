import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Recursive from './Resursive'

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        group(field: rawBody) {
          edges {
            node {
              slug
              tableOfContents
            }
          }
        }
      }
    }
  `)
  const TableofContents =
    data.allMdx.group[0].edges[0].node.tableOfContents.items
  console.log(TableofContents)
  return <Recursive items={TableofContents} />
}
export default Sidebar
