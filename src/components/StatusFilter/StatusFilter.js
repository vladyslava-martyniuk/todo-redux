import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { useDispatch } from 'react-redux';
import {setFilter} from 'redux/filters/filtersSlice';

export const StatusFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <Button onClick={() => dispatch(setFilter('all'))}>All</Button>
      <Button onClick={() => dispatch(setFilter('active'))}>Active</Button>
      <Button onClick={() => dispatch(setFilter('completed'))}>Completed</Button>
    </div>
  );
};
