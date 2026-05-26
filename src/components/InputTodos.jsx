const style = {
  backgroundColor: "#c6e5d9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
  display: "flex"
}

export const InputTodos = (props) => {
    const {todoText, onChangeTodoText, onClickTextAdd, limit} = props
    return (
        <div style={style}>
        <input type="text" placeholder="Todoを入力" value ={todoText} onChange={onChangeTodoText} disabled={limit}/>
        <button onClick={onClickTextAdd} disabled={limit}>追加</button>
        
      </div>
    );
}