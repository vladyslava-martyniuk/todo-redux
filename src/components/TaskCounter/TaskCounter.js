import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
import { getActiveTodos } from "redux/filters/filtersSelectors";
import { getCompletedTodos } from "redux/filters/filtersSelectors";

export const TaskCounter = () => {
  // const activeTodos = useSelector(getActiveTodos);
  // console.log(activeTodos);
  // const completedTodos = useSelector(getCompletedTodos);
  // console.log(completedTodos);
  // return (
  //   <div>
  //     <p className={css.text}>Active: {activeTodos.length}</p>
  //     <p className={css.text}>Completed: {completedTodos.length}</p>
  //   </div>
  // );
};
