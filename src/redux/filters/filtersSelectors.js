//  import { selectTodos } from '../todos/todosSlice';
//  export const todos = (state) => selectTodos(state);
// export const getVisibleTodos = (state) =>{
//     const filter = state.filters;
//     console.log(state);
//     switch(filter){
//         case 'all': return todos;
//         case 'active': return todos.filter(todo => !todo.completed);
//         case 'completed': return todos.filter(todo => todo.completed);
//         default: return todos;
//     }
// } 
// export const getFilter = state => state.filters;
// console.log(todos);
// export const getActiveTodos = state => todos.filter(todo => !todo.completed);
// export const getCompletedTodos = state => todos.filter(todo => todo.completed); 
