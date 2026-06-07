import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { selectTodoIds } from "redux/todos/todosSlice";
import { selectedVisibleTodos } from "redux/filters/filtersSelectors";



export const TaskList = () => {
   const todos = useSelector(selectedVisibleTodos);
   console.log(todos);
  return (
    <ul className={css.list}>
      {todos.map(id => (
          <Task key={id} id={id}/>

      ))}
    </ul>
    
  );
};
