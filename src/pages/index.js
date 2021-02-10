import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { getAllHabits } from "../../api"

const IndexPage = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    getAllHabits.then(data => {
      setLoading(false)
      setData(data)
    })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h2>Habits</h2>
      {loading
        ? "loading..."
        : data.map(habit => {
            return (
              <div>
                <p>
                  {habit.title} - {habit.points} - {habit.metric} - {habit.note}
                </p>
              </div>
            )
          })}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
