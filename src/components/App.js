import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { fetchTodos } from "redux/todos/todosOperations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AuthForm } from "./AuthForm/AuthForm";

 export function App ()  {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <Layout>
       <AppBar />
      <TaskForm />
      <TaskList /> 
      <AuthForm />
    </Layout>
  );
};


