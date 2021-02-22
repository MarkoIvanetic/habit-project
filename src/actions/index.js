import { getAllHabits } from "@api"

// ***********************************************************************
const _getHabits = data => ({
  type: "GET_HABITS",
  payload: data,
})

export function getHabits(params) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      getAllHabits.then(data => {
        dispatch(_getHabits(data))
        resolve(data)
      })
    })
  }
}

// ***********************************************************************
const _createHabit = data => ({
  type: "CREATE_HABIT",
  payload: data,
})

export function getHabits(params) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      getAllHabits.then(data => {
        dispatch(_createHabit(data))
        resolve(data)
      })
    })
  }
}

// ***********************************************************************
