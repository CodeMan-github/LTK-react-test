import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  TableHead,
  Paper,
} from '@mui/material';
import { addTodo, removeTodo } from '../state';

const validationSchema = yup.object({
  todo: yup
    .string('Enter todo')
    .required('Todo is required'),
});

const BasicForm = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const formik = useFormik({
    initialValues: {
      todo: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const _id = Date.now();
      const todo = { _id, name: values.todo };
      dispatch(addTodo(todo));
    },
  });

  return (
    <div>
      <h1>TODO</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="todo"
          name="todo"
          label="Todo"
          value={formik.values.todo}
          onChange={formik.handleChange}
          error={formik.touched.todo && Boolean(formik.errors.todo)}
          helperText={formik.touched.todo && formik.errors.todo}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TableRow
                key={todo._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {todo._id}
                </TableCell>
                <TableCell align="right">{todo.name}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => dispatch(removeTodo(todo))}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BasicForm
