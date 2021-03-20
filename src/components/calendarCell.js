import React, { useState } from 'react'
import PropTypes, { number, shape } from 'prop-types'
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons'
import { Button, Grid, Popover, TableCell as RaTableCell, Typography } from '@material-ui/core'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'

import { makeStyles, styled } from '@material-ui/core/styles'

const TableCell = styled(RaTableCell)(
    ({ theme }) => ({
        padding: 0,
        '&:hover': {
            background: theme.palette.grey[200],
            cursor: 'pointer'
        }
    }),
    { name: 'HbtTableCell' }
)

const CalendarCell = ({ habits, data }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [score, setScore] = useState(0)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (
        <TableCell align="right">
            <div style={{ position: 'relative' }}>
                <Typography style={{ padding: '8px' }} onClick={handleClick}>
                    {score}
                </Typography>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Button size="small" onClick={() => setScore(score + data.points)}>
                            <AddCircleOutline />
                        </Button>
                        <Button size="small" onClick={() => setScore(score > data.points ? score - data.points : 0)}>
                            <RemoveCircleOutline />
                        </Button>
                    </Grid>
                </Popover>
            </div>
        </TableCell>
    )
}

CalendarCell.propTypes = {
    data: shape({
        points: number
    }),
    habits: shape([])
}

CalendarCell.defaultProps = {
    habits: []
}

export default CalendarCell
