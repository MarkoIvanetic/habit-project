import { createStore as reduxCreateStore } from "redux"
import reducer from "../src/reducers/reducer"

const initialState = {
  habits: [],
}

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore
