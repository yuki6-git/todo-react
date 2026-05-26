import { useState } from 'react';
import './Todo.css';
import {InputTodos} from "./components/InputTodos";
import {IncompleteTodos} from "./components/IncompleteTodos";
import {CompleteTodos} from "./components/CompleteTodos";

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState("")
  const onChangeTodoText = (e) => { setTodoText(e.target.value);}
  
  const onClickTextAdd = () => {
    if(todoText ==="") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("")
  }
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
    
  }
  const isMaxLimitIncompleteTodos = incompleteTodos.length >=5

  return (
    <>
      <InputTodos 
        todoText={todoText} 
        onChangeTodoText={onChangeTodoText} 
        onClickTextAdd={onClickTextAdd}  
        limit={isMaxLimitIncompleteTodos} 
      />
      
      {isMaxLimitIncompleteTodos && <p style ={{color: "red"}}>追加できるTodoは５個までです</p>}
      
      <IncompleteTodos 
        todos={incompleteTodos} 
        onClickDelete={onClickDelete} 
        onClickComplete={onClickComplete}
      />
      <CompleteTodos
        todos={completeTodos} 
        onClick={onClickBack} 
      />
    </>
  );
};
