import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = ({ data }) => (
  <Layout>
    <ul>
      {data.fauna.allHabits.data.map(product => (
        <li>
          {product.title} - {product.points}
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query MyItemQuery {
    fauna {
      allHabits {
        data {
          title
          points
          note
          metric
        }
      }
    }
  }
`

export default IndexPage
