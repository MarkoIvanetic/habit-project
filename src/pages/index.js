import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// import { getAllHabits } from "../../api"
import { getAllHabits, createHabit, deleteHabit } from "@api"
import HabitCreateForm from "../components/HabitCreateForm.component"
import { connect, useDispatch } from "react-redux"

const IndexPage = ({ habits }) => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  const loadHabits = () => {
    getAllHabits.then(data => {
      dispatch({ type: "GET_HABITS", payload: data })
      setLoading(false)
    })
  }

  const onCreateHabit = async newHabit => {
    const { data } = await createHabit(newHabit)
    dispatch({ type: "CREATE_HABIT", payload: data })
  }

  const onDeleteHabit = async id => {
    deleteHabit(id)
      .then(response => {
        dispatch({ type: "DELETE_HABIT", payload: { id } })
      })
      .catch(error => {})
  }

  useEffect(() => {
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
              : habits.map(habit => {
                  return (
                    <div key={habit.id}>
                      <p>
                        {habit.title} - {habit.points} - {habit.metric} -{" "}
                        {habit.note}
                        <span onClick={() => onDeleteHabit(habit.id)}>X</span>
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
            <HabitCreateForm onCreateHabit={onCreateHabit} />
          </div>
        </div>
      </Layout>
    </>
  )
}

const mapStateToProps = state => {
  return {
    habits: state.habits,
  }
}

export default connect(mapStateToProps)(IndexPage)
