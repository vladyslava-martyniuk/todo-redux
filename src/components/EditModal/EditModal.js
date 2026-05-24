import css from './EditModal.module.css'
import { MdClose } from "react-icons/md";
import { editTodo } from 'redux/todos/todosOperations';
import { useDispatch } from "react-redux";
 export const EditModal = ({modal, text, id, completed, close}) => {
 console.log(modal);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(editTodo({ id, text: form.elements.edit.value, completed})); 
    close();
  };
  return (

    <div className={css.modal__box}>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className={css.field}
            type="text"
            name="edit"
            placeholder="Enter task rename..."
            defaultValue={text}
            
          />
        </label>
        <button className={css.btn} type="submit" >Edit</button>
      </form>
      <button className={css.btn} onClick={close}>
        <MdClose size={24} />
      </button>
    </div>
  );
};


