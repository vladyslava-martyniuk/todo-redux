 import { createSelector } from '@reduxjs/toolkit';
 import { selectTodos } from '../todos/todosSlice';
 export const selectedTodos = (state) => selectTodos(state);
export const selectedVisibleTodos = (state) =>{
    const filter = state.filters;
    console.log(state);
    switch(filter){
        case 'all': return selectTodos(state).map(todo => todo.id);
        case 'active': return selectTodos(state).filter(todo => !todo.completed). map(todo => todo.id);
        case 'completed': return selectTodos(state).filter(todo => todo.completed).map(todo => todo.id);
        default: return todos;
    }
} 
export const getFilter = state => state.filters;
export const selectedActiveTodos = (state) => selectTodos(state).filter(todo => !todo.completed);
export const selectedCompletedTodos = (state) => selectTodos(state).filter(todo => todo.completed); 


