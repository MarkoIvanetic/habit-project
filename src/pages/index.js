import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import { Layout, SEO, Image } from '@components'

import { getAllHabits, createHabit, deleteHabit, getAllCalendar, createCalendarEntry } from '@api'
import { connect, useDispatch } from 'react-redux'

const IndexPage = ({ habits }) => {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    return (
        <>
            <Layout>
                <SEO title="Home" />

                <div style={{ display: 'flex' }}></div>
            </Layout>
        </>
    )
}

const mapStateToProps = state => {
    return {
        habits: state.habits
    }
}

export default connect(mapStateToProps)(IndexPage)
