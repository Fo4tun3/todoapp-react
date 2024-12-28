import style from "./footer.module.css"
export default function Footer({todos}) {
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <div className={style.footer}> 
      <span className={style.item}>Completed Todos: {completedTodos}</span>
      <span className={style.item}>Uncompleted Todos: {totalTodos}</span>
    </div>
  );
}
