import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  styled,
  Grid,
  FormControlLabel,
  Checkbox,
  FormControl,
  TextField,
  Dialog,
  Typography,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';

import { connect, useDispatch } from 'react-redux';
import { getAllHabits, createHabit, deleteHabit } from '@api';
import { Layout } from '@components';

const habitFormInitialState = {
  title: '',
  metric: '',
  points: '',
  note: '',
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const HabitEditor = ({ habits }) => {
  const [data, setData] = useState(habitFormInitialState);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  // ************************************************************
  const loadHabits = () => {
    getAllHabits.then((data) => {
      dispatch({ type: 'GET_HABITS', payload: data });
      setLoading(false);
    });
  };

  useEffect(() => {
    loadHabits();
  }, []);
  // ************************************************************

  const onCreateHabit = async (newHabit) => {
    const data = await createHabit(newHabit);
    dispatch({ type: 'CREATE_HABIT', payload: data });
    setData(habitFormInitialState);
  };

  const onDeleteHabit = async (id) => {
    deleteHabit(id)
      .then((response) => {
        dispatch({ type: 'DELETE_HABIT', payload: { id } });
      })
      .catch((error) => {});
  };
  // ************************************************************

  const classes = useStyles();
  return (
    <Layout>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {habits.map((habit) => (
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
                    onClick={() => onDeleteHabit(habit.id)}
                  >
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
                  onChange={(e) => {
                    setData({ ...data, title: e.target.value });
                  }}
                  value={data.title}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  required
                  label="Metric"
                  fullWidth
                  onChange={(e) => {
                    setData({ ...data, metric: e.target.value });
                  }}
                  value={data.metric}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  type="number"
                  required
                  label="Points"
                  fullWidth
                  onChange={(e) => {
                    setData({ ...data, points: e.target.value });
                  }}
                  type="number"
                  value={data.points}
                />
              </TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  aria-label="create new"
                  component="span"
                  onClick={() => onCreateHabit(data)}
                >
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    habits: state.habits,
  };
};

export default connect(mapStateToProps)(HabitEditor);
