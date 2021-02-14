import React, { useState } from "react"
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core"

import { connect, useDispatch } from "react-redux"
import { getAllHabits, createHabit, deleteHabit } from "@api"

const habitFormInitialState = {
  title: "",
  metric: "",
  points: "",
  note: "",
}

const HabitEditor = () => {
  const [open, setOpen] = useState(false)

  const [data, setData] = useState(habitFormInitialState)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setData(habitFormInitialState)
  }

  const onCreateHabit = async newHabit => {
    const { data } = await createHabit(newHabit)
    dispatch({ type: "CREATE_HABIT", payload: data })
  }

  const onDeleteHabit = async id => {
    deleteHabit(id)
      .then(response => {
        dispatch({ type: "DELETE_HABIT", payload: { id } })
      })
      .catch(error => {})
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Habit Editor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <FormControl>
            <InputLabel htmlFor="habit-title">Title</InputLabel>
            <Input
              id="habit-title"
              onChange={e => {
                setData({ ...data, title: e.target.value })
              }}
              value={data.title}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="habit-metric">Metric</InputLabel>
            <Input
              id="habit-metric"
              onChange={e => {
                setData({ ...data, metric: e.target.value })
              }}
              value={data.metric}
            />
            <FormHelperText id="my-helper-text">
              e.g. "30 minutes", "10 pages"
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="habit-points">Points</InputLabel>
            <Input
              id="habit-points"
              onChange={e => {
                setData({ ...data, points: e.target.value })
              }}
              type="number"
              value={data.points}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="habit-note" multiline={true}>
              Note
            </InputLabel>
            <Input
              id="habit-note"
              onChange={e => {
                setData({ ...data, note: e.target.value })
              }}
              value={data.note}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    habits: state.habits,
  }
}

export default connect(mapStateToProps)(HabitEditor)
