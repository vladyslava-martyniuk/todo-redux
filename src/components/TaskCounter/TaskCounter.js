import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
import { selectedActiveTodos } from "redux/filters/filtersSelectors";
import { selectedCompletedTodos } from "redux/filters/filtersSelectors";

export const TaskCounter = () => {
  const activeTodos = useSelector(selectedActiveTodos);
  console.log(activeTodos);
  const completedTodos = useSelector(selectedCompletedTodos);
  console.log(completedTodos);
  return (
    <div>
      <p className={css.text}>Active: {activeTodos.length}</p>
      <p className={css.text}>Completed: {completedTodos.length}</p>
    </div>
  );
};
