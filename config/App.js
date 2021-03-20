import React from 'react'

import { useGetHabits } from '@hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const App = ({ children }) => {
    const { status, data, error, isFetching } = useGetHabits()
    return children
}

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <App>{element}</App>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
