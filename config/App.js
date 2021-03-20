import React, { useEffect, useState } from 'react'

import { getAllHabits } from '@api'
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

const fetchHabits = async () => {
    const res = await getAllHabits()
    return res
}

const queryClient = new QueryClient()

const App = ({ children }) => {
    const { data, status } = useQuery('habits', fetchHabits)
    console.log(status)
    console.log(data)
    return children
}

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <App>
                {element}
                <ReactQueryDevtools initialIsOpen={false} />
            </App>
        </QueryClientProvider>
    )
}
