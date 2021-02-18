import React, { useEffect, useState } from 'react';
import {
  makeStyles,
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

import AddCircle from '@material-ui/icons/AddCircle';

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
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(habitFormInitialState);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const loadHabits = () => {
    getAllHabits.then((data) => {
      dispatch({ type: 'GET_HABITS', payload: data });
      setLoading(false);
    });
  };

  useEffect(() => {
    loadHabits();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setData(habitFormInitialState);
  };

  const onCreateHabit = async (newHabit) => {
    const { data } = await createHabit(newHabit);
    dispatch({ type: 'CREATE_HABIT', payload: data });
  };

  const onDeleteHabit = async (id) => {
    deleteHabit(id)
      .then((response) => {
        dispatch({ type: 'DELETE_HABIT', payload: { id } });
      })
      .catch((error) => {});
  };

  console.log(habits);

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
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {habits.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.title || 'Nan'}
                </TableCell>
                <TableCell align="right">{row.metric}</TableCell>
                <TableCell align="right">{row.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={4}>
          <TextField
            required
            label="Title"
            fullWidth
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
            }}
            value={data.title}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            label="Metric"
            fullWidth
            onChange={(e) => {
              setData({ ...data, metric: e.target.value });
            }}
            value={data.metric}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
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
        </Grid>
        <IconButton color="primary" aria-label="create new" component="span">
          <AddCircle />
        </IconButton>
      </Grid>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    habits: state.habits,
  };
};

export default connect(mapStateToProps)(HabitEditor);
