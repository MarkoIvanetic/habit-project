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
    default:
      return state
  }
}

export default reducer
