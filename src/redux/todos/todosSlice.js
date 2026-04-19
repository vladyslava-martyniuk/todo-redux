import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [{id: 1, text: "Learn React", completed: false}];
const todosSlice = createSlice({
    name: "todos",
    initialState,

    reducers: {
        addTodo: {
            reducer: (state, action) => {state.push(action.payload)},
        
         prepare(text) {
        return {
            payload: {
                id: nanoid(),
                completed: false,
                text
            },
        }
    }
    },
    removeTodo:{
        reducer: (state, action) => state.filter(todo => todo.id !== action.payload),
        prepare(id) {
            return {
                payload: id,
            }
        }
    }

   
    }
});
console.log(todosSlice);
export const { addTodo } = todosSlice.actions;
export const { removeTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
