import React from 'react'

import { useGetHabits } from '@hooks'
import { QueryClient, QueryClientProvider, useIsFetching } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { CircularProgress } from '@material-ui/core'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity
        }
    }
})

// eslint-disable-next-line react/display-name,react/prop-types
const App = ({ element }) => {
    useGetHabits()
    const isFetching = useIsFetching()

    return (
        <QueryClientProvider client={queryClient}>
            <App>{element}</App>
            <ReactQueryDevtools initialIsOpen={false} />
            {isFetching && <CircularProgress style={{ position: 'absolute', bottom: '0', right: '0' }} />}
        </QueryClientProvider>
    )
}

export default App
