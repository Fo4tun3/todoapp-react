import style from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const strikeClass = item.done ? style.completed : "";
  return (
    <div className={style.item}>
      <div className={style.itemName}>
        <span className={strikeClass} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={style.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={style.line} />
    </div>
  );
}
