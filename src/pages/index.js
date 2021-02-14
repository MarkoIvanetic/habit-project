import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// import { getAllHabits } from "../../api"
import { getAllHabits, createHabit } from "@api"
import HabitCreateForm from "../components/HabitCreateForm.component"

const IndexPage = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const loadHabits = () => {
    getAllHabits.then(data => {
      console.log(data)
      setLoading(false)
      setData(data)
    })
  }
  useEffect(() => {
    setLoading(true)
    loadHabits()
  }, [])

  return (
    <>
      <Layout>
        <SEO title="Home" />

        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <h2>Habits</h2>
            {loading
              ? "loading..."
              : data.map(habit => {
                  return (
                    <div key={habit.id}>
                      <p>
                        {habit.title} - {habit.points} - {habit.metric} -{" "}
                        {habit.note}
                      </p>
                    </div>
                  )
                })}
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            <button onClick={() => loadHabits()}>Refresh</button>
          </div>
          <div style={{ flex: 1 }}>
            <HabitCreateForm
              onCreateHabit={data => {
                createHabit(data).then(response => {
                  console.log(response)
                })
              }}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
