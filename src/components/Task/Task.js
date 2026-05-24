import { MdClose } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import css from "./Task.module.css";

import { useDispatch } from "react-redux";

import {
  deleteTodo,
  toggleTodoAsync,
} from "redux/todos/todosOperations";

import { useState } from "react";
import { EditModal } from "components/EditModal/EditModal";

export const Task = ({ task }) => {
  const [modal, isOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={() => dispatch(toggleTodoAsync(task))}
      />

      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={() => isOpen(true)}><MdEdit size={24} /></button>
      <button
        className={css.btn}
        onClick={() => dispatch(deleteTodo(task.id))}
      >
        <MdClose size={24} />
      </button>
       {modal && <EditModal modal={modal} id={task.id} completed={task.completed} text={task.text} close={() => isOpen(false)}/>}
    </div>
  );
};