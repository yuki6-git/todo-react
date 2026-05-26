export const InputTodos = (props) => {
    const {todoText, onChangeTodoText, onClickTextAdd} = props
    return (
        <div className="input-area">
        <input type="text" placeholder="Todoを入力" value ={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickTextAdd}>追加</button>
      </div>
    );
}