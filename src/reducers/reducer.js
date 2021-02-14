const initialState = {
  loaded: {
    habits: false,
  },
  habits: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HABITS":
      return {
        ...state,
        habits: action.payload,
        loaded: { ...state.loaded, habits: true },
      }
    case "CREATE_HABIT":
      return {
        ...state,
        habits: [...state.habits, action.payload],
      }
    case "DELETE_HABIT":
      return {
        ...state,
        habits: state.habits.filter(habit => habit.id !== action.payload.id),
      }
    default:
      return state
  }
}

export default reducer
