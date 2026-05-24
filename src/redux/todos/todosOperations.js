import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://6a003d142b7ab349603029d5.mockapi.io/";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/todos");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/todos", {
        text,
        completed: false,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/todos/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodo",
  async (todo, thunkAPI) => {
    try {
      const response = await axios.put(`/todos/${todo.id}`, {
        ...todo,
        completed: !todo.completed,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async (todo, thunkAPI) => {
    try {
      const response = await axios.put(`/todos/${todo.id}`, todo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);