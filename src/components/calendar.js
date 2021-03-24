/* eslint-disable no-plusplus */
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CalendarCell from './calendarCell'

const generateWeekCalendar = () => {
    const calendar = []
    const monday = moment().startOf('isoWeek').format()

    for (let i = 0; i < 7; i++) {
        calendar.push({
            index: i,
            day: moment(monday).add(i, 'days'),
            dayOfWeek: moment(monday).add(i, 'days').format('dd'),
            entries: []
        })
    }

    return calendar
}

const useStyles = makeStyles({
    table: {
        minWidth: 700
    }
})

const weekCalendar = generateWeekCalendar()

const Calendar = ({ habits }) => {
    const classes = useStyles()

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="habbit table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            {weekCalendar.map(day => (
                                <TableCell align="right" key={day.dayOfWeek}>
                                    {day.day.format('MM/DD')}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell>Habit</TableCell>
                            <TableCell align="right">Metric</TableCell>
                            <TableCell align="right">Rating</TableCell>
                            {weekCalendar.map(day => (
                                <TableCell align="right" key={day.dayOfWeek}>
                                    {day.dayOfWeek}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {habits.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.metric}</TableCell>
                                <TableCell align="right">{row.points}</TableCell>
                                {weekCalendar.map(day => (
                                    <CalendarCell key={day.index} data={row} />
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

Calendar.propTypes = { habits: PropTypes.shape([]) }

Calendar.defaultProps = {
    habits: []
}

export default Calendar
