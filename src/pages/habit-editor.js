import { createHabit, deleteHabit, getAllHabits } from '@api'
import { Layout } from '@components'
import {
    IconButton,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/AddCircle'
import DeleteIcon from '@material-ui/icons/Delete'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

const habitFormInitialState = {
    title: '',
    metric: '',
    points: 0,
    note: ''
}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        '& thead': {
            background: '#3f51b5',
            '& th': {
                color: 'white'
            }
        }
    }
})

const HabitEditor = ({ location }) => {
    const queryClient = useQueryClient()

    const [formData, setFormData] = useState(habitFormInitialState)

    const { data: habits } = useQuery('habits', getAllHabits)

    const { mutate: createHabitMutation } = useMutation(createHabit, {
        onSuccess: () => {
            queryClient.invalidateQueries('habits')
        }
    })
    const { mutate: deleteHabitMutation } = useMutation(deleteHabit, {
        onSuccess: () => {
            queryClient.invalidateQueries('habits')
        }
    })
    const classes = useStyles()

    return (
        <Layout location={location}>
            <Typography variant="h5" gutterBottom>
                Habits
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Metric</TableCell>
                            <TableCell>Points</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(habits || []).map(habit => (
                            <TableRow key={habit.id}>
                                <TableCell component="th" scope="habit">
                                    {habit.title}
                                </TableCell>
                                <TableCell>{habit.metric}</TableCell>
                                <TableCell>{habit.points}</TableCell>
                                <TableCell>
                                    <IconButton
                                        color="secondary"
                                        aria-label="remove"
                                        component="span"
                                        onClick={() => deleteHabitMutation(habit.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <TextField
                                    required
                                    label="Title"
                                    fullWidth
                                    onChange={e => {
                                        setFormData({ ...formData, title: e.target.value })
                                    }}
                                    value={formData.title}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <TextField
                                    required
                                    label="Metric"
                                    fullWidth
                                    onChange={e => {
                                        setFormData({ ...formData, metric: e.target.value })
                                    }}
                                    value={formData.metric}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <TextField
                                    type="number"
                                    required
                                    label="Points"
                                    fullWidth
                                    onChange={e => {
                                        setFormData({ ...formData, points: +e.target.value })
                                    }}
                                    value={formData.points}
                                />
                            </TableCell>
                            <TableCell>
                                <IconButton
                                    color="primary"
                                    aria-label="create new"
                                    component="span"
                                    onClick={() => createHabitMutation(formData)}>
                                    <AddIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    )
}

HabitEditor.propTypes = {
    location: PropTypes.string
}
export default HabitEditor
