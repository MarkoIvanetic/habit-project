import React from 'react'

import { getAllHabits } from '@api'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity
        }
    }
})
const App = ({ children }) => {
    useQuery('habits', getAllHabits)
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
