import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import { getAllHabits } from '@api'
import moment from 'moment'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

function getPreviousMonday() {
    const date = new Date()
    const day = date.getDay()
    const prevMonday = new Date()
    if (date.getDay() == 0) {
        prevMonday.setDate(date.getDate() - 7)
    } else {
        prevMonday.setDate(date.getDate() - (day - 1))
    }

    return prevMonday
}

const generateWeekCalendar = () => {
    const calendar = []
    const monday = moment(getPreviousMonday()).format()

    for (let i = 0; i < 7; i++) {
        calendar.push({
            date: moment(monday).add(i, 'days').format('dddd'),
            entries: []
        })
    }

    return calendar
}

const weekCalendar = generateWeekCalendar()

const Calendar = ({ habits }) => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Habit</TableCell>
                            <TableCell>Metric</TableCell>
                            <TableCell>Rating</TableCell>
                            {weekCalendar.map(day => (
                                <TableCell>{day.date}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {habits.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.metric}</TableCell>
                                <TableCell align="right">{row.points}</TableCell>
                                {weekCalendar.map(day => (
                                    <TableCell align="right">0</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

Calendar.propTypes = {}

Calendar.defaultProps = {
    habits: []
}

const mapStateToProps = state => {
    return {
        habits: state.habits
    }
}

export default connect(mapStateToProps)(Calendar)
