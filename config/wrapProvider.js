import React, { useEffect, useState } from 'react'

import { getAllHabits } from '@api'
import { connect, useDispatch, Provider } from 'react-redux'
import createStore from './createStore'

const App = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        getAllHabits.then(data => {
            dispatch({ type: 'GET_HABITS', payload: data })
            setLoading(false)
        })
    }, [])

    return children
}

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
    const store = createStore()

    return (
        <Provider store={store}>
            <App>{element}</App>
        </Provider>
    )
}
