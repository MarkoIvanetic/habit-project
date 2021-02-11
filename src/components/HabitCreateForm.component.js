import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const HabitCreateForm = ({ onCreateHabit }) => {
  const [data, setData] = useState({
    title: "",
    metric: "",
    points: "",
    note: "",
  })

  return (
    <div>
      <div>
        <label>{"title: ".toUpperCase()}</label>
        <input
          onChange={e => {
            setData({ ...data, title: e.target.value })
          }}
          type="text"
          value={data.title}
        />
      </div>
      <div>
        <label>{"metric: ".toUpperCase()}</label>
        <input
          onChange={e => {
            setData({ ...data, metric: e.target.value })
          }}
          type="text"
          value={data.metric}
        />
      </div>
      <div>
        <label>{"points: ".toUpperCase()}</label>
        <input
          onChange={e => {
            setData({ ...data, points: e.target.value })
          }}
          type="number"
          value={data.points}
        />
      </div>
      <div>
        <label>{"note: ".toUpperCase()}</label>
        <input
          onChange={e => {
            setData({ ...data, note: e.target.value })
          }}
          type="text"
          value={data.note}
        />
      </div>
      <button onClick={() => onCreateHabit(data)}>Submit</button>
    </div>
  )
}

HabitCreateForm.propTypes = {
  onCreateHabit: PropTypes.func,
}

export default HabitCreateForm
