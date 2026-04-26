
export const getVisibleTodos = (state) =>{
    const filter = state.filters;
    const todos = state.todos;
    switch(filter){
        case 'all': return todos;
        case 'active': return todos.filter(todo => !todo.completed);
        case 'completed': return todos.filter(todo => todo.completed);
        default: return todos;
    }
} 
export const getFilter = state => state.filters;
