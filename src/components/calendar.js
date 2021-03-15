import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import moment from 'moment'

function getPreviousMonday() {
    var date = new Date()
    var day = date.getDay()
    var prevMonday = new Date()
    if (date.getDay() == 0) {
        prevMonday.setDate(date.getDate() - 7)
    } else {
        prevMonday.setDate(date.getDate() - (day - 1))
    }

    return prevMonday
}

const generateWeekCalendar = () => {
    let calendar = []
    const monday = moment(getPreviousMonday())

    for (let i = 1; i < 7; i++) {
        calendar.push({
            date: monday.add(i, 'days'),
            entries: []
        })
    }
}

const Calendar = props => {
    return <div></div>
}

Calendar.propTypes = {}

Calendar.defaultProps = {}

export default Calendar
