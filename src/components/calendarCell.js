import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import { getAllHabits } from '@api'
import moment from 'moment'
import { TableCell } from '@material-ui/core'

const CalendarCell = ({ habits }) => {
    return <TableCell align="right">0</TableCell>
}

CalendarCell.propTypes = {}

CalendarCell.defaultProps = {
    habits: []
}

export default CalendarCell
