import React from 'react'

import { Calendar, Layout, SEO } from '@components'

const IndexPage = () => {
    // const [loading, setLoading] = useState(true)

    return (
        <>
            <Layout>
                <SEO title="Home" />

                <div style={{ display: 'flex' }} />
                <Calendar />
            </Layout>
        </>
    )
}

export default IndexPage
