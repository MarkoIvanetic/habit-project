import React from 'react'

import { useGetHabits } from '@hooks'
import { QueryClient, QueryClientProvider, useIsFetching } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity
        }
    }
})

const App = ({ children }) => {
    useGetHabits()
    const isFetching = useIsFetching()
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
