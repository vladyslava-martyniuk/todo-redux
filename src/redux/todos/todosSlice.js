import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchTodos, addTodo, deleteTodo, toggleTodoAsync, editTodo } from "./todosOperations";

const initialState = {
    error: null,
    loading: false,
    todos: [],
};
const todosAdapter = createEntityAdapter();
const todosSlice = createSlice({
    name: "todos",
    initialState: todosAdapter.getInitialState({
        error: null,
        loading: false,
    }),
   
    extraReducers: builder => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            todosAdapter.setAll(state, action.payload);
        })

        .addCase(addTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload)
        })

        .addCase(deleteTodo.fulfilled, (state, action) => {
            state.todos = state.todos.filter(
                todo => todo.id !== action.payload
            );
        })

        .addCase(toggleTodoAsync.fulfilled, (state, action) => {
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: {
                    completed: action.payload.completed,
                },
            })
            // const index = state.todos.findIndex(
            //     todo => todo.id === action.payload.id
            // );

            // if (index !== -1) {
            //     state.todos[index] = action.payload;
            // }
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
const todosSelectors = todosAdapter.getSelectors((state) => state.todos);
console.log(todosSelectors);

export const {
    selectAll: selectTodos,
    selectById: selectTodoById,
    selectIds: selectTodoIds,
} = todosSelectors