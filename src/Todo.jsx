import { useState } from 'react';
import './Todo.css';

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    'やること１',
    'やること２',
  ]);
  const [completeTodos, setcompleteTodos] = useState([
    'やることだったもの１',
    'やることだったもの２',
  ]);
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="Todoを入力"></input>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title"> 完了のTodo</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
          ;
        </ul>
      </div>
    </>
  );
};
