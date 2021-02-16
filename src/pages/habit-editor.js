import React, { useState } from "react"
import {
  Button,
  FormControl,
  TextField,
  Dialog,
  Typography,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core"

import Grid from "@material-ui/core/Grid"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

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
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Title"
            fullWidth
            onChange={e => {
              setData({ ...data, title: e.target.value })
            }}
            value={data.title}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Metric"
            fullWidth
            onChange={e => {
              setData({ ...data, metric: e.target.value })
            }}
            value={data.metric}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            required
            label="Points"
            fullWidth
            onChange={e => {
              setData({ ...data, points: e.target.value })
            }}
            type="number"
            value={data.points}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    habits: state.habits,
  }
}

export default connect(mapStateToProps)(HabitEditor)
