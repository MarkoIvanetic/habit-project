import React from "react"
import { Provider } from "react-redux"

import createStore from "./createStore"
import { getAllHabits } from "@api"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  const store = createStore()

  return <Provider store={store}>{element}</Provider>
}