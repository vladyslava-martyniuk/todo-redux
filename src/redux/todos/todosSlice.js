import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, addTodo, deleteTodo, toggleTodoAsync, editTodo } from "./todosOperations";

const initialState = {
    error: null,
    loading: false,
    todos: [],
};

const todosSlice = createSlice({
    name: "todos",
    initialState,

    extraReducers: builder => {
        builder

        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
        })

        .addCase(addTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload);
        })

        .addCase(deleteTodo.fulfilled, (state, action) => {
            state.todos = state.todos.filter(
                todo => todo.id !== action.payload
            );
        })

        .addCase(toggleTodoAsync.fulfilled, (state, action) => {
            const index = state.todos.findIndex(
                todo => todo.id === action.payload.id
            );

            if (index !== -1) {
                state.todos[index] = action.payload;
            }
        })

        .addCase(editTodo.fulfilled, (state, action) => {
            const index = state.todos.findIndex(
                todo => todo.id === action.payload.id
            );

            if (index !== -1) {
                state.todos[index] = action.payload;
            }
        });

    },
});

export const todosReducer = todosSlice.reducer;